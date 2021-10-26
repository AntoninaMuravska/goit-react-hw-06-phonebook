(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={label:"Filter_label__Dv_mH",input:"Filter_input__1e0f6",span:"Filter_span__vEJKD"}},22:function(t,e,n){t.exports={container:"Container_container__V-9Z6"}},37:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(9),o=n.n(i),s=n(5),u=n(13),l=n(3),b=n(4),j=n(20),m=n.n(j),d=n(7),h=n(2),p=n(41),O={addContact:Object(l.b)("contacts/ADD",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(p.a)(),name:e,number:n}}})),deleteContact:Object(l.b)("contacts/DELETE"),changeFilter:Object(l.b)("contacts/FILTER")},f=Object(l.c)([],(a={},Object(d.a)(a,O.addContact,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(d.a)(a,O.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),_=Object(l.c)("",Object(d.a)({},O.changeFilter,(function(t,e){return e.payload}))),x=Object(h.b)({items:f,filter:_}),C=n(21),v=n.n(C),g=[].concat(Object(u.a)(Object(l.d)({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})),[m.a]),F={key:"contacts",storage:v.a,blacklist:["filter"]},y=Object(l.a)({reducer:{contacts:Object(b.g)(F,x)},middleware:g,devTools:!1}),I={store:y,persistor:Object(b.h)(y)},N=(n(37),n(11)),S=n(12),k=n(15),D=n(14),A=n(22),L=n.n(A),w=n(1),E=function(t){var e=t.children;return Object(w.jsx)("div",{className:L.a.container,children:e})},J=n(8),z=n.n(J),T=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},Z=Object(s.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:T(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(O.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(w.jsx)("ul",{className:z.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(w.jsxs)("li",{className:z.a.item,children:[Object(w.jsx)("p",{className:z.a.name,children:a}),Object(w.jsx)("p",{className:z.a.number,children:c}),Object(w.jsx)("button",{type:"button",className:z.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),q=n(10),M=n.n(q),B=n(16),H=n.n(B),P=function(t){var e=t.filter,n=t.changeFilter;return Object(w.jsxs)("label",{className:H.a.label,children:[Object(w.jsx)("span",{className:H.a.span,children:"Find contacts by name"}),Object(w.jsx)("input",{type:"text",className:H.a.input,value:e,onChange:n})]})},V=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(O.changeFilter(e.target.value))}}}))(P);P.protoType={filter:M.a.string,changeFilter:M.a.func};var K=n(6),Q=n.n(K),R=function(t){Object(k.a)(n,t);var e=Object(D.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(p.a)(),t.numberInputId=Object(p.a)(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(S.a)(n,[{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("form",{className:Q.a.form,onSubmit:this.handleSubmit,children:[Object(w.jsx)("label",{className:Q.a.label,htmlFor:this.nameInputId,children:"Name"}),Object(w.jsx)("input",{type:"text",name:"name",id:this.nameInputId,value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:Q.a.input,required:!0}),Object(w.jsx)("label",{className:Q.a.label,htmlFor:this.numberInputId,children:"Number"}),Object(w.jsx)("input",{type:"tel",name:"number",id:this.numberInputId,value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:Q.a.input,required:!0}),Object(w.jsx)("button",{type:"submit",className:Q.a.btnSubmit,children:"Add contact"})]})})}}]),n}(c.Component),W=Object(s.b)(null,(function(t){return{onSubmit:function(e){return t(O.addContact(e))}}}))(R);var X=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(W,{}),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(V,{}),Object(w.jsx)(Z,{})]})]})},$=(n(39),function(t){Object(k.a)(n,t);var e=Object(D.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(E,{children:Object(w.jsx)(X,{})})})}}]),n}(c.Component)),G=$,U=n(23);o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(s.a,{store:I.store,children:Object(w.jsx)(U.a,{loading:null,persistor:I.persistor,children:Object(w.jsx)(G,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__IEDCx",label:"ContactForm_label__3-oaQ",input:"ContactForm_input__2hH7y",btnSubmit:"ContactForm_btnSubmit__2oFqM"}},8:function(t,e,n){t.exports={list:"ContactList_list__JX78n",item:"ContactList_item__2WVtu",name:"ContactList_name__2b1Ja",number:"ContactList_number__NFl9a",button:"ContactList_button__3PIdS"}}},[[40,1,2]]]);
//# sourceMappingURL=main.8ee7ddb4.chunk.js.map