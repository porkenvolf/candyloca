(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{135:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),a=n(4),i=n(33),o=n(66),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,f,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]?l[3]:"recent",o=l.length>4&&void 0!==l[4]&&l[4],s=!1,u={slot:0,confirmations:0,err:null},f=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(l,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{f=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),l(u))}),i)}catch(d){s=!0,console.error("WS error in setup",t,d)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,l(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[f]&&r.removeSignatureListener(f),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,f,l,b,d,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),f={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return l=e.sent,b=l.data.itemsAvailable.toNumber(),d=l.itemsRedeemed.toNumber(),p=b-d,m=l.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:b,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:f,itemsAvailable:b,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,l,d,x,O,g;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,l=t.connection,d=t.program,e.next=7,m(s.publicKey);case 7:return x=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,l.getMinimumBalanceForRentExemption(o.a.span);case 13:return g=e.sent,e.next=16,d.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:x,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:g,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),b(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},462:function(e,t){},464:function(e,t){},478:function(e,t){},482:function(e,t){},484:function(e,t){},494:function(e,t){},496:function(e,t){},523:function(e,t){},525:function(e,t){},530:function(e,t){},532:function(e,t){},538:function(e,t){},540:function(e,t){},552:function(e,t){},555:function(e,t){},567:function(e,t){},568:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(29),f=n.n(u),l=(n(353),n(354),n(10)),b=n(1),d=n.n(b),p=n(4),m=n(13),j=n(134),x=n(136),O=n(313),g=n(595),y=n(600),v=n(604),h=n(603),S=n(37),w=n(53),k=n(175),P=n(135),R=n(31),K=Object(x.a)(k.a)(r||(r=Object(j.a)([""]))),T=x.a.span(c||(c=Object(j.a)([""]))),A=x.a.div(a||(a=Object(j.a)([""]))),L=Object(x.a)(g.a)(i||(i=Object(j.a)([""]))),M=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(T,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},B=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(o.useState)(!1),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),f=Object(m.a)(u,2),b=f[0],j=f[1],x=Object(o.useState)(!1),g=Object(m.a)(x,2),k=g[0],T=g[1],B=Object(o.useState)(0),W=Object(m.a)(B,2),I=W[0],C=W[1],D=Object(o.useState)(0),E=Object(m.a)(D,2),N=E[0],_=E[1],Y=Object(o.useState)(0),F=Object(m.a)(Y,2),U=(F[0],F[1]),q=Object(o.useState)({open:!1,message:"",severity:void 0}),G=Object(m.a)(q,2),Z=G[0],z=G[1],V=Object(o.useState)(new Date(e.startDate)),H=Object(m.a)(V,2),J=H[0],X=H[1],Q=Object(w.c)(),$=Object(o.useState)(),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(d.a.mark((function t(){var n,r,c,a,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(Q,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,C(a),U(i),_(o),j(0===i),X(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(d.a.mark((function t(){var n,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,T(!0),!Q||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(P.c)(te,e.config,Q.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),z({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!Q){t.next=23;break}return t.next=21,e.connection.getBalance(Q.publicKey);case 21:i=t.sent,r(i/S.LAMPORTS_PER_SOL);case 23:return T(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q){t.next=5;break}return t.next=3,e.connection.getBalance(Q.publicKey);case 3:n=t.sent,r(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Q,e.connection]),Object(o.useEffect)(re,[Q,e.candyMachineId,e.connection]),Object(R.jsx)("main",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:Object(R.jsxs)("div",{style:{padding:30,display:"flex",flex:1,flexDirection:"column"},children:[Object(R.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Q&&Object(R.jsxs)("p",{children:["Wallet ",Object(P.d)(Q.publicKey.toBase58()||"")]}),Object(R.jsx)("div",{}),Object(R.jsx)(K,{children:Q?"Connected":"Connect Wallet"})]}),Object(R.jsxs)("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(R.jsx)(A,{children:Object(R.jsx)(L,{disabled:b||k||!i,onClick:ce,variant:"contained",children:b?"SOLD OUT":i?k?Object(R.jsx)(y.a,{}):"MINT":Object(R.jsx)(O.a,{date:J,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:M})})}),Object(R.jsx)("div",{children:Q&&Object(R.jsxs)("p",{children:["Supply: ",N,"/",I]})})]}),Object(R.jsx)(v.a,{open:Z.open,autoHideDuration:6e3,onClose:function(){return z(Object(l.a)(Object(l.a)({},Z),{},{open:!1}))},children:Object(R.jsx)(h.a,{onClose:function(){return z(Object(l.a)(Object(l.a)({},Z),{},{open:!1}))},severity:Z.severity,children:Z.message})})]})})},W=n(33),I=n(118),C=n(340),D=n(601),E=new W.d.PublicKey("4R51NzGGVW3vAotXZCmLr6W6uFDtnBgwqH633L1WhFiN"),N=new W.d.PublicKey("3xdkZifs7yMWxTSFqZYLgj9vt2LazKG4mKpsN3AYjva2"),_=new W.d.PublicKey("8oRNi4RLibWrxDQzjymr5791A1kZ3a49XTkWhAjWf5xN"),Y="devnet",F=new W.d.Connection("https://explorer-api.devnet.solana.com"),U=parseInt("980996400",10),q=Object(C.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),G=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(Y)}),[]),t=Object(o.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:Y}),Object(I.d)({network:Y})]}),[]);return Object(R.jsx)(D.a,{theme:q,children:Object(R.jsx)(w.a,{endpoint:e,children:Object(R.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(B,{candyMachineId:_,config:N,connection:F,startDate:U,treasury:E,txTimeout:3e4})})})})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,605)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};f.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(G,{})}),document.getElementById("root")),Z()}},[[568,1,2]]]);
//# sourceMappingURL=main.80ef8a7e.chunk.js.map