(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{163:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},164:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,b=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return a?r.a.createElement(b,l(l({ref:t},c),{},{components:a})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(163),r=a(164),o=(a(0),a(165)),i={title:"What is a metadata delta?",hide_title:!0,slug:"/what/delta",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/delta.md"},l={unversionedId:"docs/what/delta",id:"docs/what/delta",isDocsHomePage:!1,title:"What is a metadata delta?",description:"What is a metadata delta?",source:"@site/genDocs/docs/what/delta.md",slug:"/what/delta",permalink:"/docs/what/delta",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/delta.md",version:"current",sidebar:"overviewSidebar",previous:{title:"What is a snapshot?",permalink:"/docs/what/snapshot"},next:{title:"What is MXE (Metadata Events)?",permalink:"/docs/what/mxe"}},d=[],c={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"what-is-a-metadata-delta"},"What is a metadata delta?"),Object(o.b)("p",null,"Rest.li supports ",Object(o.b)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#partial_update"},"partial update")," natively without needing explicitly defined models.\nHowever, the granularity of update is always limited to each field in a PDL model.\nThere are cases where the update need to happen at an even finer grain, e.g. adding or removing items from an array."),Object(o.b)("p",null,"To this end, we\u2019re proposing the following entity-specific metadata delta model that allows atomic partial updates at any desired granularity.\nNote that:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Just like metadata ",Object(o.b)("a",{parentName:"li",href:"/docs/what/aspect"},"aspects"),", we\u2019re not imposing any limit on the partial update model, as long as it\u2019s a valid PDL record.\nThis is because the rest.li endpoint will have the logic that performs the corresponding partial update based on the information in the model.\nThat said, it\u2019s common to have fields that denote the list of items to be added or removed (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"membersToAdd")," & ",Object(o.b)("inlineCode",{parentName:"li"},"membersToRemove")," from below)"),Object(o.b)("li",{parentName:"ol"},"Similar to metadata ",Object(o.b)("a",{parentName:"li",href:"/docs/what/snapshot"},"snapshots"),", entity that supports metadata delta will add an entity-specific metadata delta\n(e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"GroupDelta")," from below) that unions all supported partial update models."),Object(o.b)("li",{parentName:"ol"},"The entity-specific metadata delta is then added to the global ",Object(o.b)("inlineCode",{parentName:"li"},"Delta")," typeref, which is added as part of ",Object(o.b)("a",{parentName:"li",href:"/docs/what/mxe#metadata-change-event-mce"},"Metadata Change Event")," and used during ",Object(o.b)("a",{parentName:"li",href:"/docs/architecture/metadata-ingestion"},"Metadata Ingestion"),".")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"namespace com.linkedin.group\n\nimport com.linkedin.common.CorpuserUrn\n\n/**\n * A metadata delta for a specific group entity\n */\nrecord MembershipPartialUpdate {\n  \n  /** List of members to be added to the group */\n  membersToAdd: array[CorpuserUrn]\n\n  /** List of members to be removed from the group */\n  membersToRemove: array[CorpuserUrn]\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"namespace com.linkedin.metadata.delta\n\nimport com.linkedin.common.CorpGroupUrn\nimport com.linkedin.group.MembershipPartialUpdate\n\n/**\n * A metadata delta for a specific group entity\n */\nrecord GroupDelta {\n\n  /** URN for the entity the metadata delta is associated with */\n  urn: CorpGroupUrn\n\n  /** The specific type of metadata delta to apply */\n  delta: union[MembershipPartialUpdate]\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"namespace com.linkedin.metadata.delta\n\n/**\n * A union of all supported metadata delta types.\n */\ntyperef Delta = union[GroupDelta]\n")))}p.isMDXComponent=!0}}]);