"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4531],{2815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(4848),i=n(8453);const r={id:"transactions",sidebar_label:"Transactions",title:"Transactions"},a="Server-Side Transactions",o={id:"extensions/transactions",title:"Transactions",description:"Custom transactions allows adding a new transaction and registering it with Garnet. This registered transaction can then be invoked from any Garnet client to perform a transaction on the Garnet server.",source:"@site/docs/extensions/transactions.md",sourceDirName:"extensions",slug:"/extensions/transactions",permalink:"/garnet/docs/extensions/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/extensions/transactions.md",tags:[],version:"current",frontMatter:{id:"transactions",sidebar_label:"Transactions",title:"Transactions"},sidebar:"garnetDocSidebar",previous:{title:"Objects",permalink:"/garnet/docs/extensions/objects"},next:{title:"Procedures",permalink:"/garnet/docs/extensions/procedure"}},c={},d=[{value:"Developing custom server side transactions",id:"developing-custom-server-side-transactions",level:3},{value:"Execution",id:"execution",level:3}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"server-side-transactions",children:"Server-Side Transactions"})}),"\n",(0,s.jsx)(t.p,{children:"Custom transactions allows adding a new transaction and registering it with Garnet. This registered transaction can then be invoked from any Garnet client to perform a transaction on the Garnet server."}),"\n",(0,s.jsx)(t.h3,{id:"developing-custom-server-side-transactions",children:"Developing custom server side transactions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CustomTransactionProcedure"})," is the base class for all custom transactions. To develop a new one, this class has to be extended and then include the custom logic. There are three methods to be implemented in a new custom transaction:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Prepare<TGarnetReadApi>(TGarnetReadApi api, ArgSlice input)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Main<TGarnetApi>(TGarnetApi api, ArgSlice input, ref MemoryResult<byte> output)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Finalize<TGarnetApi>(TGarnetApi api, ArgSlice input, ref MemoryResult<byte> output)"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Prepare"})," method implementation must setup the keys that will be involved in the transaction using utility methods available described below. The ",(0,s.jsx)(t.code,{children:"Main"})," method is where the actual operation is to be performed as the locks required for the keys setup in the ",(0,s.jsx)(t.code,{children:"Prepare"})," method are already obtained. The ",(0,s.jsx)(t.code,{children:"Main"})," method then generates the output of the transaction as well. After the unlock of keys comes the ",(0,s.jsx)(t.code,{children:"Finalize"})," phase, which can contain any non-transactional read and write operations on the store, and can write output as well. ",(0,s.jsx)(t.code,{children:"Finalize"})," allows users to author complex non-transactional scripts as well: ",(0,s.jsx)(t.code,{children:"Prepare"})," should simply return false, while ",(0,s.jsx)(t.code,{children:"Main"})," is left unimplemented."]}),"\n",(0,s.jsx)(t.p,{children:"These are the helper methods for developing custom transactions."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"AddKey(ArgSlice key, LockType type, bool isObject)"})," This method is used to add a specified key to the locking set. It takes three parameters: key (the key to be added), type (the type of lock to be applied), and isObject (a boolean value indicating whether the key represents an object)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"RewindScratchBuffer(ref ArgSlice slice)"})," This method is responsible for rewinding (popping) the last entry of the scratch buffer if it contains the given ArgSlice. It takes a reference to an ArgSlice parameter and returns a boolean value indicating whether the rewind operation was successful."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CreateArgSlice(ReadOnlySpan<byte> bytes)"})," This method is used to create an ArgSlice in the scratch buffer from a given ReadOnlySpan<byte>. It takes a ReadOnlySpan<byte> parameter representing the argument and returns an ArgSlice object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CreateArgSlice(string str)"})," This method is similar to the previous one, but it creates an ArgSlice in UTF8 format from a given string. It takes a string parameter and returns an ArgSlice object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GetNextArg(ArgSlice input, ref int offset)"})," This method is used to retrieve the next argument from the input at the specified offset. It takes an ArgSlice parameter representing the input and a reference to an int offset. It returns an ArgSlice object representing the argument as a span. The method internally reads a pointer with a length header to extract the argument.\nThese member functions provide utility and convenience methods for manipulating and working with the transaction data, scratch buffer, and input arguments within the CustomTransactionProcedure class."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Registering the custom transaction is done on the server-side by calling the ",(0,s.jsx)(t.code,{children:"NewTransactionProc(string name, int numParams, Func<CustomTransactionProcedure> proc)"})," method on the Garnet server object's ",(0,s.jsx)(t.code,{children:"RegisterAPI"})," object with its name, number of parameters and a method that returns an instance of the custom transaction class.",(0,s.jsx)(t.br,{}),"\n","It is possible to register the custom transaction from the client-side as well (as an admin command, given that the code already resides on the server) by using the ",(0,s.jsx)(t.code,{children:"REGISTER"})," command (see ",(0,s.jsx)(t.a,{href:"/garnet/docs/dev/custom-commands",children:"Custom Commands"}),")."]}),"\n",(0,s.jsx)(t.h3,{id:"execution",children:"Execution"}),"\n",(0,s.jsxs)(t.p,{children:["Custom transactions are executed by the ",(0,s.jsx)(t.code,{children:"RunTransactionProc"})," method in the ",(0,s.jsx)(t.code,{children:"TransactionManager"})," class. This method could be invoked either by calling the ",(0,s.jsx)(t.code,{children:"RUNTXP"})," command with the custom transaction details or by using the custom transaction name used when registering."]}),"\n",(0,s.jsxs)(t.p,{children:["The initial phase is performed by invoking the ",(0,s.jsx)(t.code,{children:"Prepare"})," method of the custom transaction which adds the keys that need to be locked using the ",(0,s.jsx)(t.code,{children:"AddKey"})," method. If the ",(0,s.jsx)(t.code,{children:"Prepare"})," method fails by returning ",(0,s.jsx)(t.strong,{children:"false"}),", the transaction manager's ",(0,s.jsx)(t.code,{children:"Reset(false)"})," is called to reset itself. Otherwise, it proceeds to the next step of invoking the ",(0,s.jsx)(t.code,{children:"Run"})," method of the ",(0,s.jsx)(t.code,{children:"TransactionManager"})," class. See the description above for this method. If the ",(0,s.jsx)(t.code,{children:"Run"})," method fails, the transaction manager is reset too."]}),"\n",(0,s.jsxs)(t.p,{children:["Next step, it proceeds to invoking the custom transaction's ",(0,s.jsx)(t.code,{children:"Main"})," method implementation which performs the core logic of the transaction. On successful completion, it proceeds to log the transaction information. On the other hand, if the ",(0,s.jsx)(t.code,{children:"Main"})," method fails by throwing an exception, ",(0,s.jsx)(t.code,{children:"Reset(true)"})," is called to unlock any locked keys and reset itself."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Finalize"})," phase is invoked at the end regardless of the success or failure of the actual transaction. As mentioned earlier, it can contain non-transactional logic over the store, and can generate output."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);