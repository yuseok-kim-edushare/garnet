﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System;
using System.Diagnostics;
using System.Runtime.CompilerServices;

namespace Tsavorite.core
{
    /// <summary>
    /// Tsavorite in single-store mode uses this class. Garnet in dual-store mode uses RespKernelSession to implement <see cref="IKernelSession"/>
    /// </summary>
    public struct BasicKernelSession<TKey, TValue, TInput, TOutput, TContext, TSessionFunctions, TStoreFunctions, TAllocator> : IKernelSession
        where TSessionFunctions : ISessionFunctions<TKey, TValue, TInput, TOutput, TContext>
        where TStoreFunctions : IStoreFunctions<TKey, TValue>
        where TAllocator : IAllocator<TKey, TValue, TStoreFunctions>
    {
        private readonly ClientSession<TKey, TValue, TInput, TOutput, TContext, TSessionFunctions, TStoreFunctions, TAllocator> _clientSession;

        internal readonly TsavoriteKernel Kernel => _clientSession.Store.Kernel;

        internal BasicKernelSession(ClientSession<TKey, TValue, TInput, TOutput, TContext, TSessionFunctions, TStoreFunctions, TAllocator> clientSession) => _clientSession = clientSession;

        /// <inheritdoc/>
        public ulong SharedTxnLockCount { get => throw new NotImplementedException("SharedTxnLockCount.get"); set => throw new NotImplementedException("SharedTxnLockCount.set"); }

        /// <inheritdoc/>
        public ulong ExclusiveTxnLockCount { get => throw new NotImplementedException("ExclusiveTxnLockCount.get"); set => throw new NotImplementedException("ExclusiveTxnLockCount.set"); }

        /// <inheritdoc/>
        public void CheckTransactionIsStarted() => throw new NotImplementedException("CheckTransactionIsStarted()");

        /// <inheritdoc/>
        public void CheckTransactionIsNotStarted() => throw new NotImplementedException("CheckTransactionIsNotStarted()");

        /// <inheritdoc/>
        public void Refresh<TKeyLocker>(ref HashEntryInfo hei) where TKeyLocker : struct, IKeyLocker
            => _clientSession.Refresh(ref hei);

        /// <inheritdoc/>
        public void HandleImmediateNonPendingRetryStatus(bool refresh) => _clientSession.HandleImmediateNonPendingRetryStatus(refresh);

        /// <inheritdoc/>
        public void BeginUnsafe()
        {
            Kernel.Epoch.Resume();
            _clientSession.DoThreadStateMachineStep();
        }

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public bool EnsureBeginUnsafe()
        {
            if (IsEpochAcquired)
                return false;
            BeginUnsafe();
            return true;
        }

        /// <inheritdoc/>
        public void EndUnsafe()
        {
            Debug.Assert(Kernel.Epoch.ThisInstanceProtected());
            Kernel.Epoch.Suspend();
        }

        /// <inheritdoc/>
        public readonly bool IsEpochAcquired => Kernel.Epoch.ThisInstanceProtected();
    }
}