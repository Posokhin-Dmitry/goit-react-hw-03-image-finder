(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(20),c=a.n(o),i=(a(27),a(28),a(11)),s=a(4),l=a(5),u=a(7),m=a(6),d=a(21),h=a.n(d),g=function(e,t,a){return h.a.get("https://pixabay.com/api/"+"?q=".concat(t,"&page=").concat(e,"&key=").concat("23587360-9e8d8834fc0ca0fd407cdbeb2","&image_type=photo&orientation=horizontal&per_page=").concat(a))},b=a(0),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),""===e.state.query.trim()&&alert("enter the name of the picture"),e.props.onSubmit(e.state.query),e.setState({query:""})},e.handleQuery=function(t){e.setState({query:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleQuery})]})})}}]),a}(n.Component),j=p,f=function(e){var t=e.tags,a=e.webformatURL,n=e.largeImageURL,r=e.onClick;return Object(b.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return r({largeImageURL:n,tags:t})},children:Object(b.jsx)("img",{className:"ImageGalleryItem-image",src:a,alt:t})})},y=function(e){var t=e.dataImages,a=e.onClickImg;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(b.jsx)(f,{tags:r,webformatURL:n,largeImageURL:o,onClick:a},t)}))})},O=function(e){var t=e.onClick;return Object(b.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},v=a(22),w=a.n(v),x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(w.a,{className:"loader",type:"TailSpin",color:"#3f51b5",height:100,width:100,timeout:1e5})})},I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlay=function(t){var a=document.querySelector(".Overlay");t.target===a&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"Overlay",onClick:this.handleOverlay,children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:this.props.img.largeImageURL,alt:this.props.img.tags})})})}}]),a}(n.Component),S=I,k=function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL}}))},C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,dataImages:[],largeImage:{},maxPerPage:12,query:"",isLoading:!1,showModal:!1},e.searchQuery=function(t,a,n){e.setState({isLoading:!0}),g(t,a,n).then((function(t){var a=t.data;e.setState({dataImages:[].concat(Object(i.a)(e.state.dataImages),Object(i.a)(k(a.hits)))})})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.handleFormSubmit=function(t){e.setState({dataImages:[],page:1}),e.setState({query:t})},e.handleClickLoadMore=function(){var t=e.state.page;t+=1,e.setState({page:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClickImg=function(t){e.setState({largeImage:t}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.page,n=t.query,r=this.state.page,o=this.state.query,c=this.state.maxPerPage;n===o&&a===r||this.searchQuery(r,o,c),r>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.dataImages,a=e.isLoading,n=e.showModal,r=e.largeImage,o=this.handleFormSubmit,c=this.handleClickImg,i=this.handleClickLoadMore,s=this.toggleModal;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{onSubmit:o}),t.length>0&&Object(b.jsx)(y,{dataImages:t,onClickImg:c}),a&&Object(b.jsx)(x,{}),t.length>11&&Object(b.jsx)(O,{onClick:i}),n&&Object(b.jsx)(S,{img:r,onClose:s})]})}}]),a}(n.Component),L=C;c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.683add70.chunk.js.map