"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[12058,20128],{897328:e=>{var a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AdReasonsModalContainer_pin",selections:[{alias:null,args:null,concreteType:"AdTargetingAttribution",kind:"LinkedField",name:"adTargetingAttribution",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isCustomerListMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingRetargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActalikeMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEngagementMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isExpandTargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFromGpsLocation",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVisitorMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingProspectingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPlPersonaMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedAgeBucket",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedLocale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedInterest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedGender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedDevice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoRegion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoPostalCode",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAdvertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAttributionName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPromotedPartnership",storageKey:null}],type:"Pin",abstractKey:null};a.hash="ee7db6c842dc59bc7c3fde7a6b1774cf",e.exports=a},827896:(e,a,n)=>{n.d(a,{Z:()=>s});var o=n(616550),t=n(768559),i=n(350118);function s(){let e=(0,i.S6)(),a=(0,o.TH)();return(n,o)=>{let i;let s=e(n);if(o?.shouldTrackForPrevLocation){let e=s?.tracking_params_map||{},a=Object.keys(e),n=a.find(e=>"PinResource"!==e);s&&(i=n?e[n]:e.PinResource)}else s&&(i=(0,t.Z)({boardUrl:s.board?.url,location:a,pinId:s.id,pinnerUserName:s.pinner?.username,storyPinDataId:s.story_pin_data_id,trackingParams:s.tracking_params,trackingParamsMap:s.tracking_params_map}));return i}}},915446:(e,a,n)=>{n.d(a,{Z:()=>t});let o={REPIN_BOARD:1,USER_ACTIVITY:4,CLICKTHROUGH:9,FRESH_REPIN_BOARD:47,FRESH_CLICKTHROUGH:48,FRESH_USER_ACTIVITY:49,LOCAL_REPIN_BOARD:13,LOCAL_CLICKTHROUGH:32,LOCAL_USER_ACTIVITY:33,P2P_CLICKTHROUGH:28,INSTANT_PFY_NON_MATERIALIZABLE:36,FOLLOWED_INTEREST:5,TOPIC_BEST_PINS:70,EMBEDDING_BASED_BEST_PINS:173,RECOMMENDED_TOPICS:65,RECOMMENDED_GEO_INTERESTS:192,USER_SEQUENCE_INTERESTS_PINS:193,U2I_DNN_INTERESTS_PINS:196,PINNERSAGE_INTERESTS_PINS:197,GRAPHSAGE_USER_EMBEDDINGS_TO_ORGANIC_PINS:109,NAVBOOST_PFY:89,NAVBOOST_P2P:88,NOTIFICATION_NEWS_HUB:138,GEMINI_INTERESTS_FRESH:104,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN:100,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN_ENGAGEMENT:175,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_VIDEO:95,INTENTIONAL_DISTRIBUTION_DOMAIN:86,INTENTIONAL_DISTRIBUTION_TOPICS_STORY_PINS:91,INTENTIONAL_DISTRIBUTION_TOPICS_VIDEO:98,GRAPHSAGE_MULTI_PINS_TO_CREATOR_PINS_REALTIME:135,GRAPHSAGE_MULTI_PINS_TO_VIDEO_PINS_REALTIME:139,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS_REALTIME:140,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGEED_INTERESTS_VIDEO:118,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGED_INTERESTS_STORY_PIN:130,CREATOR_DIRECT_INJECT:148,USER_INTERESTS_TO_LONGTERM_CREATOR_PINS:141,GRAPHSAGE_PRODUCT_PINS:97,GRAPHSAGE_TML_PRODUCT_PINS:212,GRAPHSAGE_USER_EMBEDDINGS_TO_PINS:108,PROMOTED_PIN:15,UNKNOWN:0,RECOMMENDED_CATEGORY:2,COOKIE_MONSTER:3,REALTIME_P2B:6,REALTIME_P2B_CLOSEUP:22,RECOMMENDED_INTEREST:7,VISUALLY_SIMILAR:8,BOARD_FOLLOW:35,USER_FOLLOW:45,RECOMMENDED_COMMERCE:10,EVERYTHING_FEED:11,RECOMMENDED_LOCAL_PIN:12,SEARCH:46,P2P_USER_COMMERCE:16,COMMERCE_EDUCATION:17,LANDING_PAGE_PINS:18,FOLLOWING_FEED:19,POPULAR_FEED:20,P2P_DYNAMIC_GRID:23,LANDING_PAGE_INTEREST_PINS:24,FRESH_PIN_FROM_PIN:25,FRESH_PIN_FROM_INTEREST:26,FRESH_PIN_FROM_BOARD:27,SIFTER_VIDEO_FROM_INTEREST:39,SIFTER_PRODUCTS:57,SIFTER_DISTRIBUTION_A:50,SIFTER_DISTRIBUTION_B:51,SIFTER_DISTRIBUTION_C:52,SIFTER_DISTRIBUTION_D:53,SIFTER_DISTRIBUTION_E:54,SIFTER_ACTIVATION_EXPERIMENT:58,SIFTER_FRESHMAKER_PIN_FROM_INTEREST:40,P2P_CLOSEUP:29,P2P_LIKE:30,P2P_PIN_CREATE:31,INSTANT_PFY:34,DYNAMIC_INSERTION:37,DYNAMIC_INSERTION_BOARD_FOLLOW:38,HYPERLOCAL_INTEREST_BOARD:41,NUX_BOARD_FOLLOW_P2P:42,INDIRECT_DOMAIN_PIN:43,PIXIE_PINS_FOR_BOARD:44,SCREENSHOT_SAVE:55,TEXT_EMBEDDINGS:56,FRESH_TEXT_EMBEDDINGS:67,PREFETCH_LOAD:60,DIVERSE_TOPICS:62,QUIZ_RESULTS:63,INTENTIONAL_DISTRIBUTION_TOPICS:64,INTENTIONAL_DISTRIBUTION_TOPICS_THIRD_PARTY:90,INTENTIONAL_DISTRIBUTION_GEMINI:73,INTENTIONAL_DISTRIBUTION_GEMINI_V5:120,INTENTIONAL_DISTRIBUTION_SHOP_STYLE_STL:74,INTENTIONAL_DISTRIBUTION_GRAPHSAGE:78,INTENTIONAL_DISTRIBUTION_REPIN_BOARD:80,INTENTIONAL_DISTRIBUTION_CLICKTHROUGH:81,INTENTIONAL_DISTRIBUTION_USER_ACTIVITY:82,INTENTIONAL_DISTRIBUTION_CREATOR_BASELINE:92,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS:102,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_STORY_PIN:103,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_DIVERSITY:105,PIXIE_RECENT_ACTION:66,NATIVE_CONTENT_TOPICS:68,BUBBLE_OPEN_TOPICS:69,TOPIC_BEST_PINS_V2:77,DAILY_BEST_PINS:79,TOPIC_BEST_PINS_V3:101,TOPIC_BEST_STORY_PINS:164,REC_SEQ_STORY_PIN_CLS:165,DARK_PROMOTED_PIN:71,POST_EXPLORE_TOPICS:72,GRAPHSAGE_EMBEDDINGS:75,DEMOGRAPHIC_PFY:76,SHOPPING_STL:83,UNAUTH_PIXIE_P2B:84,UNAUTH_PIXIE_P2P:85,VIDEO_EMBEDDINGS:87,VIDEO_EMBEDDINGS_GEMINI_V5:121,GEMINI_V5_EMBEDDINGS_STATIC:93,GEMINI_V5_EMBEDDINGS_FRESH:94,GEMINI_V5_EMBEDDINGS_REALTIME:106,GEMINI_V5_EMBEDDINGS_STORYPIN:107,CURATED_VIDEO_INTEREST:96,GRAPHSAGE_PRODUCT_PINS_LONGER_HISTORY:112,GRAPHSAGE_SHOPPABLE_INSPIRATION:126,GRAPHSAGE_PRODUCT_PINS_EXPERIMENTAL:134,NUX_GRAPHSAGE:99,GRAPHSAGE_USER_EMBEDDINGS_TO_PRODUCT_PINS:110,GRAPHSAGE_VIDEO_PINS:113,RECBOOST_REPIN_BOARD:114,RECBOOST_CLICKTHROUGH:115,RECBOOST_USER_ACTIVITY:116,RECBOOST_CREATOR_BOARDS:129,RECOMMENDED_BOARDS:117,RECOMMENDED_ANNOTATION_BOARDS:136,RECOMMENDED_GRAPHSAGE_BOARDS:153,INTENTIONAL_DISTRIBUTION_RECOMMENDED_GRAPHSAGE_BOARDS:191,RECOMMENDED_CREATOR_BOARDS:124,ANNOTATION_REC_CREATOR_BOARDS:127,INTENTIONAL_DISTRIBUTION_MANUAL_INTERESTS_VIDEO:119,INTENTIONAL_DISTRIBUTION_INTERESTS_VIDEO:143,INTENTIONAL_DISTRIBUTION_INTERESTS_STORY_PIN:144,REPIN_CREATOR_BOARD:122,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS:123,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS_REALTIME:131,FRESH_SIG_FROM_BOARD:125,RECENT_ENGAGED_CREATOR_BOARDS:128,RECENT_ENGAGED_BOARDS:132,SHOPPING_CREATOR_REALTIME:133,GRAPHSAGE_BASED_RECOMMENDED_CREATOR_BOARDS:137,PIXIE_P2P:142,NEW_USE_CASE_PINS:145,RECBOOST_NEW_USE_CASES:146,SEARCHSAGE_PFY:147,SEARCHSAGE_SHOPPING_PFY:155,INTEREST_EXPLORATION:149,INTEREST_EXPLORATION_TRENDY_QUERIES:150,INTEREST_EXPLORATION_RELATED_INTERESTS:151,RECBOOST_INTERESTS:152,HF_STORY_SHOPPING_RETARGETING:154,RECBOOST_STORY_PINS:156,RECBOOST_STORY_BOARDS:157,PINNABILITY_EMBEDDINGS:158,PINNABILITY_FRESH_STORY_EMBEDDINGS:159,PINNABILITY_STORY_EMBEDDINGS:160,PINNABILITY_PRODUCT_PIN_EMBEDDINGS:195,PINNABILITY_FRESH_PRODUCT_PIN_EMBEDDINGS:209,PINNABILITY_TML_PRODUCT_PIN_EMBEDDINGS:213,PINNABILITY_MULTI_EMBEDDINGS:210,EXPLORATION_STORY_PINS:161,EXPLORATION_STORY_PINS_BASELINE:162,EXPLOITATION_STORY_PINS:163,ANNOTATION_REC_CREATOR_STORY_PINS:166,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS:167,IDEASTREAM_GRAPHSAGE_STORY_PINS:168,HF_EDUCATION_PIN_INSERTION:169,RP_EDUCATION_PIN_INSERTION:170,USER_TO_CREATOR_STORY_PINS:171,USER_TO_CREATOR_STORY_PINS_ENGAGEMENT:176,COENGAGEMENT_STORY_PINS:172,ANNOTATION_STORY_PINS:177,DISCOVER_STREAM_DEMOGRAPHIC_FALLBACK:178,DISCOVER_STREAM_CELEBRITY:179,GRAPHSAGE_SHOPIFY_VMP_PRODUCT_PINS:180,CREATOR_BEST_IDEA_PINS:181,INTEREST_BEST_IDEA_PINS:182,NAVBOOST_STORY_PINS:183,SHOPPING_DISTRIBUTION_PINS:185,WATCH_TAB_EHQ_STORIES:186,NOTIF_LEARNED_RETRIEVAL:187,NOTIF_DIRECT_INJECT:207,LANDING_PAGE_PIN_RECOMMENDATIONS:188,PINNERSAGE_LEARNED_EMBEDDINGS:189,RECGPT_CG_USER_TO_PINS:206,TOPIC_FEED:190,ORGANIC_COENGAGEMENT:211,RTC_IMPROVEMENT_TEST_1:501,RTC_IMPROVEMENT_TEST_2:502,RTC_IMPROVEMENT_TEST_3:503,RTC_IMPROVEMENT_TEST_4:504,RTC_IMPROVEMENT_TEST_5:505,RTC_IMPROVEMENT_TEST_6:506,RTC_IMPROVEMENT_TEST_7:507,RTC_IMPROVEMENT_TEST_8:508,RTC_IMPROVEMENT_TEST_9:509,RTC_IMPROVEMENT_TEST_10:510,RTC_IMPROVEMENT_TEST_11:511,RTC_IMPROVEMENT_TEST_12:512,RTC_IMPROVEMENT_TEST_13:513,RTC_IMPROVEMENT_TEST_14:514,RTC_IMPROVEMENT_TEST_15:515,RTC_BLENDER_TEST:516,P2P_COMMERCE:21,P2P:14,LENS_CAMERA_VISUALLY_SIMILAR:111,RECENT_FOLLOWED_INTEREST:59,RECENT_FOLLOWED_BOARD:61,GRAPHSAGE_SHOPIFY_VMP_MERCHANT_ACTIVATION_PRODUCT_PINS:174,FOLLOWED_INTEREST_SEO_BESPIN_EXPORATION:184,XPIXIE_TO_PRODUCT_PINS:194,SHOPPING_RECENTLY_VIEWED_MODULE_PINS:198,SHOPPING_RECENTLY_SAVED_MODULE_PINS:199,SHOPPING_BEST_SELLING_RECOMMENDED_BRAND_MODULE_PINS:200,SHOPPING_SHOP_THE_BOARD_MODULE_PINS:203,SHOPPING_ON_SALE_MODULE_PINS:204,SHOPPING_PRODUCT_CATEGORY_BASED_MODULE_PINS:205,SHOPPING_SHOP_SEARCH_MODULE_PINS:208,RECENTLY_VIEWED_ORGANIC_MODULE_PINS:201,RECENTLY_SAVED_ORGANIC_MODULE_PINS:202};function t({feedbackData:e,feedbackType:a,pinId:n,pinFeedbackType:t,recommendationReason:i,complaintReason:s,clientTrackingParams:_,isThirdPartyAd:l}){switch(a){case"search":return{action:"unrelatedSearchPin",actionOptions:{query:e?.query,pin_id:n}};case"related":return{action:"relatedPinHide",actionOptions:{pin:n}};case"newsHub":return{action:"newsHubPinHide",actionOptions:{pin_id:n,news_id:e?.newsId}};default:var r;let c="promoted"===a,d=(r=i?.reason)&&o[r],E=i?.reasonId??i?.board?.entityId,I={complaint_reason:s||0,pin_id:n,feedback_type:t||1,promoted:c};return d&&(I.recommendation_reason_id=d),E&&(I.through_id=E),i?.throughProperties&&(I.through_properties=i.throughProperties.reduce((e,a)=>{let{key:n,data:o}=a;return n&&(e[n]=[...e[n]||[],...o||[]]),e},{})),_&&(I.client_tracking_params=_),l&&(I.is_third_party_ad=l),{action:c?"promotedComplaint":"complaint",actionOptions:I}}}},170168:(e,a,n)=>{n.d(a,{Ag:()=>i,C0:()=>l,L1:()=>E,Vi:()=>s,YD:()=>d,kS:()=>t,oo:()=>_,p3:()=>I,vC:()=>r,vI:()=>c});var o=n(401060);let t="https://www.pinterest.com/business/hub/",i="https://www.pinterest.com/homefeed/",s="www.pinterest.com",_="https://help.pinterest.com",l=`${(0,o.Z)({site:"www"})}`,r=(0,o.Z)({site:"developers"}),c=`${(0,o.Z)({site:"sterling"})}`,d=`${(0,o.Z)({site:"analytics"})}`,E=`${(0,o.Z)({site:"trends"})}`,I=`${(0,o.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},567316:(e,a,n)=>{n.d(a,{ZP:()=>L,we:()=>C,nn:()=>D,zn:()=>M});var o,t=n(667294);n(167912);var i=n(407043),s=n(916117),_=n(780280),l=n(784590),r=n(19121),c=n(883119),d=n(121151),E=n(898781),I=n(349700),T=n(966113),R=n(170168),A=n(785893);function P({iconAccessibilityLabel:e,icon:a,linkAccessibilityLabel:n,showNavigationIcon:o,text:t}){return(0,A.jsxs)(c.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,A.jsx)(c.xu,{"data-test-id":"ad-reason-icon",children:(0,A.jsx)(c.Sj,{accessibilityLabel:e,bgColor:"lightGray",icon:a,iconColor:"darkGray"})}),(0,A.jsx)(c.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,A.jsx)(c.xv,{children:t})}),o&&n&&(0,A.jsx)(c.kC,{direction:"column",justifyContent:"center",children:(0,A.jsx)(c.JO,{accessibilityLabel:n,color:"default",icon:"arrow-forward"})})]})}var N=n(698330);function p({brandName:e,language:a,geoRegion:n,geoPostalCode:o,ageBucketMatch:t,localeMatch:i,interestMatch:s,genderMatch:_,deviceMatch:l,isCustomerListMatched:d,isShoppingTargetingRematched:T,isActAlikeMatched:R,isEngagementMatched:p,isExpandTargetingMatched:S,isFromGPSLocation:g,isVisitorMatched:m,isShoppingProspectingMatched:O,isPlPersonaMatched:h,gender:u,device:M}){let D=(0,E.ZP)(),{id:C}=(0,r.Z)(),L=(0,N.mN)()(C??""),x=L?.gender??"";return(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons",children:(0,A.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[""!==t&&(0,A.jsx)(P,{icon:"person",iconAccessibilityLabel:D._('Icon for ad targeting age bucket', 'app.common.react.components.PinRep.components.AdReasons.ageIcon', 'Icon for ad targeting age bucket'),text:(0,I.nk)(D._('Age {{ ageBucketMatch }}', 'app.common.react.components.PinRep.components.AdReasonsModal.ageBucketMatch', 'Ad explanation for targeting age range, ageBucketMatch: Users age range'),{ageBucketMatch:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:t},"ad-reasons-age-bucket")})}),""!==_&&"unspecified"!==x&&(0,A.jsx)(P,{icon:"person",iconAccessibilityLabel:D._('Icon for ad targeting gender', 'app.common.react.components.PinRep.components.AdReasons.genderIcon', 'Icon for ad targeting gender'),text:(0,I.nk)(D._('{{ gender }}', 'app.common.react.components.PinRep.components.AdReasonsModal.genderMatch', 'Ad explanation for targeting gender, gender: Users gender'),{gender:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:u},"ad-reasons-gender")})}),""!==n&&(0,A.jsx)(P,{icon:"location",iconAccessibilityLabel:D._('Icon for ad targeting location', 'app.common.react.components.PinRep.components.AdReasons.locationIcon', 'Icon for ad targeting location'),text:(0,I.nk)(D._('Based in {{geoRegion}}', 'app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting', 'Ad explanation for targeting location , geoRegion: location user is based in'),{geoRegion:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:n},"ad-reasons-country-name")})}),""!==o&&(0,A.jsx)(P,{icon:"location",iconAccessibilityLabel:D._('Icon for ad targeting location', 'app.common.react.components.PinRep.components.AdReasons.locationIcon', 'Icon for ad targeting location'),text:(0,I.nk)(D._('Based in {{geoPostalCode}}', 'app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting', 'Ad explanation for targeting location , geoPostalCode: location user is based in'),{geoPostalCode:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:o},"ad-reasons-country-name")})}),""!==i&&(0,A.jsx)(P,{icon:"globe",iconAccessibilityLabel:D._('Icon for ad targeting locale', 'app.common.react.components.PinRep.components.AdReasons.localeIcon', 'Icon for ad targeting locale'),text:(0,I.nk)(D._('Language {{ language }}', 'app.common.react.components.PinRep.components.AdReasonsModal.localeMatch', 'Ad explanation for targeting age range, language: Users language'),{language:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:a},"ad-reasons-locale")})}),""!==l&&(0,A.jsx)(P,{icon:"desktop",iconAccessibilityLabel:D._('Icon for ad targeting device', 'app.common.react.components.PinRep.components.AdReasons.deviceIcon', 'Icon for ad targeting device'),text:(0,I.nk)(D._('Using {{ device }}', 'app.common.react.components.PinRep.components.AdReasonsModal.deviceMatch', 'Ad explanation for targeting device, device: Users device'),{device:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:M},"ad-reasons-device")})}),""!==s&&(0,A.jsx)(P,{icon:"heart",iconAccessibilityLabel:D._('Icon for ad targeting interest', 'app.common.react.components.PinRep.components.AdReasons.interestIcon', 'Icon for ad targeting interest'),text:(0,I.nk)(D._('Interested in {{ interestMatch }}', 'app.common.react.components.PinRep.components.AdReasonsModal.interestMatch', 'Ad explanation for targeting interest, interestMatch: Users interest'),{interestMatch:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:s},"ad-reasons-interest")})}),T&&(0,A.jsx)(P,{icon:"history",iconAccessibilityLabel:D._('Icon for ad targeting user on an audience list', 'app.common.react.components.PinRep.components.AdReasons.shoppingTargeting', 'Icon for ad targeting shopping targeting'),text:(0,I.nk)(D._('Interacted with {{brandName}}', 'app.common.react.components.PinRep.components.AdReasonsModal.shoppingTargeting', 'Ad explanation for shopping targeting, brandName: promoter name'),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-shopping-targeting")})}),m&&(0,A.jsx)(P,{icon:"history",iconAccessibilityLabel:D._('Icon for ad targeting customers who interacted with this brand previously, visitor matched', 'app.common.react.components.PinRep.components.AdReasonsModal.visitorMatchIcon', 'Ad explanation for visitor targeting users who have interacted with an advertiser brand'),text:(0,I.nk)(D._('Interacted with {{brandName}}', 'app.common.react.components.PinRep.components.AdReasonsModal.visitorTargetingText', 'Text explaining the ad reason for visitor targeting users who interacted with brand previously, brandName: promoter name'),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reason-visitor")})}),d&&(0,A.jsx)(P,{icon:"menu",iconAccessibilityLabel:D._('Icon for ad targeting user on an audience list', 'app.common.react.components.PinRep.components.AdReasons.listIcon', 'Icon for ad targeting customer list'),text:(0,I.nk)(D._('On a list provided by {{brandName}}', 'app.common.react.components.PinRep.components.AdReasonsModal.customerListTargeting', 'Ad explanation for targeting customer list , brandName: promoter name'),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-customer-list")})}),p&&(0,A.jsx)(P,{icon:"pin",iconAccessibilityLabel:D._('Icon for ad targeting user on engagement audience', 'app.common.react.components.PinRep.components.AdReasons.engagementIcon', 'Icon for ad targeting engagement'),text:(0,I.nk)(D._('Interacted with {{brandName}} on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.engagementTargeting', 'Ad explanation for targeting engagement audience, brandName: promoter name'),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-engagement")})}),R&&(0,A.jsx)(P,{icon:"graph-bar",iconAccessibilityLabel:D._('Icon for ad targeting user on act alike', 'app.common.react.components.PinRep.components.AdReasons.actAlikeIcon', 'Icon for ad targeting act alike'),text:(0,I.nk)(D._('Similar demographic or interest as other {{brandName}} customers', 'app.common.react.components.PinRep.components.AdReasonsModal.', 'Ad explanation for targeting act alike, brandName: promoter name'),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-act-alike")})}),(S||O||h)&&(0,A.jsx)(P,{icon:"pinterest",iconAccessibilityLabel:D._('Icon for ad targeting user on expand targeting', 'app.common.react.components.PinRep.components.AdReasons.expandTargeting', 'Icon for ad expand targeting'),text:D._('Relevant activity on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.expandTargeting', 'Ad explanation for targeting ')}),g&&(0,A.jsx)(P,{icon:"location",iconAccessibilityLabel:D._('Icon for ad targeting user on GPS', 'app.common.react.components.PinRep.components.AdReasons.GPS', 'Icon for ad targeting GPS'),text:D._('GPS Location', 'app.common.react.components.PinRep.components.AdReasonsModal.GPS', 'Ad explanation for targeting GPS')})]})})}function S({onDismiss:e,brandName:a,userName:n,language:o,geoRegion:t,geoPostalCode:s,ageBucketMatch:_,localeMatch:l,interestMatch:r,genderMatch:P,deviceMatch:N,isCustomerListMatched:S,isShoppingTargetingRematched:g,isActAlikeMatched:m,isEngagementMatched:O,isExpandTargetingMatched:h,isFromGPSLocation:u,isVisitorMatched:C,isShoppingProspectingMatched:L,isPlPersonaMatched:x,thirdPartyAdAttributes:G}){let{logContextEvent:b}=(0,i.v)(),B=(0,E.ZP)(),U=M(P,B),f=D(N,B),y=g||S||O||m||h||u||C||x||L||""!==_||""!==l||""!==r||""!==U||""!==f||""!==t||""!==s,k=R.C0+`/${n}/`;return(0,A.jsx)(d.ZP,{accessibilityModalLabel:B._('Why am I seeing this Ad?', 'app.common.react.components.PinRep.components.AdReasonsModal', 'Modal for explaining the reasons an advertiser is targeting a user'),onDismiss:e,children:(0,A.jsxs)(c.xu,{paddingX:8,paddingY:6,children:[(0,A.jsxs)(c.xu,{display:"flex",justifyContent:"center",marginBottom:6,position:"relative",children:[(0,A.jsx)(c.xu,{left:!0,position:"absolute",children:(0,A.jsx)(c.hU,{accessibilityLabel:B._('Close', 'app.common.react.components.PinRep.components.AdReasonsModal.closeModal', 'Close ad reasons modal'),icon:"cancel",iconColor:"darkGray",onClick:()=>{b({event_type:102,element:11925,component:13756}),e()},size:"sm"})}),(0,A.jsx)(c.X6,{align:"center",size:"500",children:B._('Why you\'re seeing this ad', 'Heading for promoted Pins explanation', 'Heading for promoted pins explanation, WAISTA ')})]}),(0,A.jsxs)(c.xu,{children:[(0,A.jsx)(c.kC,{direction:"column",gap:{row:0,column:4},children:y&&(0,A.jsx)(c.xu,{"data-test-id":"waista-reason-text",marginBottom:4,children:(0,A.jsx)(c.xv,{children:G?.isEligibleForPromotedPartnership?(0,I.nk)(B._('{{ promotedPartnershipAdvertiserName }} is trying to reach specific groups of people, through a partnership with {{ promotedPartnershipAttributionName }}. Based on what you\'ve told us or other information, we think you fit some of those groups:', 'app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA', 'Text informing the user about who is the advertiser\'s target audience, for WAISTA promotedPartnershipAdvertiserName:Name of advertiser, promotedPartnershipAttributionName:Name of promoted partner'),{promotedPartnershipAdvertiserName:G.promotedPartnershipAdvertiserName,promotedPartnershipAttributionName:G.promotedPartnershipAttributionName}):(0,I.nk)(B._('{{ brandName }} is trying to reach specific groups of people. Based on what you\'ve told us or other information, we think you fit some of those groups:', 'app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA', 'text informing the user about who is the advertiser\'s target audience, for WAISTA brandName: is promoter name'),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inlineBlock",href:k,onClick:()=>{b({event_type:101,component:13756,element:13407})},target:"blank",underline:"hover",children:a})},"ad-reasons-brand-name")})})})}),(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons",children:(0,A.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[(0,A.jsx)(p,{ageBucketMatch:_,brandName:a,device:f,deviceMatch:N,gender:U,genderMatch:P,geoPostalCode:s,geoRegion:t,interestMatch:r,isActAlikeMatched:m,isCustomerListMatched:S,isEngagementMatched:O,isExpandTargetingMatched:h,isFromGPSLocation:u,isPlPersonaMatched:x,isShoppingProspectingMatched:L,isShoppingTargetingRematched:g,isVisitorMatched:C,language:o,localeMatch:l}),y&&(0,A.jsx)(c.xu,{marginBottom:1,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(B._('If this isn\'t right, {{ changeUserSettings }}', 'app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettingsText', 'Text explaining how to update personal information, changeUserSettings: link to personal settings'),{changeUserSettings:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:`${R.C0}${T.AHp}`,onClick:()=>{b({event_type:101,component:13756,element:13361})},target:"blank",underline:"hover",children:B._('update your personal information', 'app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettings', 'Link for updating personal information')})},"ad-reasons-change-user-settings")})})})]})}),(0,A.jsxs)(c.kC,{direction:"column",gap:{row:0,column:1},children:[(0,A.jsx)(c.xu,{marginBottom:1,marginTop:1,children:(0,A.jsx)(c.X6,{size:"400",children:B._('Ads on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.adsOnPinterestHeading', 'Text for explaining Ads on Pinterest')})}),(0,A.jsx)(c.xu,{marginBottom:4,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(B._('Review your {{adPreferencesLink}} to change your ad preferences.', 'app.common.react.components.PinRep.components.AdReasonsModal.change.adPreferencesText', 'Text showing where to change your ad preferences, adPreferencesLink: link to privacy settings'),{adPreferencesLink:(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons-review-ad-preferences",display:"inlineBlock",children:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:`${R.C0}${T.Gxc}`,onClick:()=>{b({event_type:101,component:13756,element:13401})},target:"blank",underline:"hover",children:B._('Privacy Settings', 'app.common.react.components.PinRep.components.AdReasonsModal.privacy.settings', 'Privacy settings link')})},"ad-reasons-review-ad-preferences")})})})}),(0,A.jsx)(c.xu,{marginBottom:4,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(B._('For more about how we collect and use data, {{ privacyPolicyLink }}', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText', 'Text explaining how we collect and use data, privacyPolicyLink: link to privacy policy'),{privacyPolicyLink:(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons-privacy-policy",children:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:T.R_9,onClick:()=>{b({event_type:101,component:13756,element:13402})},target:"blank",underline:"hover",children:B._('read our Privacy Policy', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyLink', 'Privacy policy link for reading how data is collected and used')})},"ad-reasons-privacy-policy")})})})}),(0,A.jsx)(c.xu,{marginBottom:4,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(B._('To stop seeing content from an advertiser, {{ blockAccounts }}', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText', 'Text explaining how to block an advertiser profile, blockAccounts: link to how to block accounts'),{blockAccounts:(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons-block-accounts",children:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:T.K_Y,onClick:()=>{b({event_type:101,component:13756,element:12058})},target:"blank",underline:"hover",children:B._('learn how to block accounts', 'app.common.react.components.PinRep.components.AdReasonsModal.blockAccountLink', 'Link for how to block accounts')})},"ad-reasons-block-accounts")})})})})]})]})]})})}let g=void 0!==o?o:o=n(897328),m=e=>e._('Female', 'waista.modal.attribute.female', 'Gender attribute for female'),O=e=>e._('Male', 'waista.modal.attribute.male', 'Gender attribute for male'),h=e=>e._('Web', 'waista.modal.attribute.web', 'device attribute for web'),u=e=>e._('Mobile Web', 'waista.modal.attribute.mWeb', 'device attribute for mobile web');function M(e,a){return"FEMALE"===e?m(a):"MALE"===e?O(a):""}function D(e,a){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?h(a):"AppType_WEB_MOBILE"===e?u(a):""}function C(e,a){let{name:n=""}=e.find(e=>e.key===a)??{};return n}function L({pinKey:e,onDismiss:a}){let{logContextEvent:n}=(0,i.v)(),{locale:o}=(0,_.B)(),{country:c=""}=(0,r.Z)(),d=(0,l.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),E=(0,l.Z)({name:"LocalesResource"}),I=(0,s.Z)(g,e);(0,t.useEffect)(()=>{n({event_type:120,component:13756})},[n]);let{promoter:T,isEligibleForPromotedPartnership:R,promotedPartnershipAttributionName:P,promotedPartnershipAdvertiserName:N}=I??{},p={isCustomerListMatched:I?.adTargetingAttribution?.isCustomerListMatched??!1,isShoppingRetargetingMatched:I?.adTargetingAttribution?.isShoppingRetargetingMatched??!1,isActalikeMatched:I?.adTargetingAttribution?.isActalikeMatched??!1,isEngagementMatched:I?.adTargetingAttribution?.isEngagementMatched??!1,isExpandTargetingMatched:I?.adTargetingAttribution?.isExpandTargetingMatched??!1,isFromGpsLocation:I?.adTargetingAttribution?.isFromGpsLocation??!1,isVisitorMatched:I?.adTargetingAttribution?.isVisitorMatched??!1,isShoppingProspectingMatched:I?.adTargetingAttribution?.isShoppingProspectingMatched??!1,isPlPersonaMatched:I?.adTargetingAttribution?.isPlPersonaMatched??!1,matchedAgeBucket:I?.adTargetingAttribution?.matchedAgeBucket??"",matchedLocale:I?.adTargetingAttribution?.matchedLocale??"",matchedInterest:I?.adTargetingAttribution?.matchedInterest??"",matchedGender:I?.adTargetingAttribution?.matchedGender??"",matchedDevice:I?.adTargetingAttribution?.matchedDevice??"",geoRegion:I?.adTargetingAttribution?.geoRegion??"",geoPostalCode:I?.adTargetingAttribution?.geoPostalCode??""},{isCustomerListMatched:m=!1,isShoppingRetargetingMatched:O=!1,isActalikeMatched:h=!1,isEngagementMatched:u=!1,isExpandTargetingMatched:M=!1,isFromGpsLocation:D=!1,isVisitorMatched:L=!1,isShoppingProspectingMatched:x=!1,isPlPersonaMatched:G=!1,matchedAgeBucket:b="",matchedLocale:B="",matchedInterest:U="",matchedGender:f="",matchedDevice:y="",geoRegion:k="",geoPostalCode:v=""}=function(e=null,a=4){return e&&Object.keys(e).filter(a=>"boolean"==typeof e[a]||"string"==typeof e[a]).filter(a=>!1!==e[a]&&""!==e[a]).slice(0,a).reduce((a,n)=>({...a,[n]:e[n]}),{})}(p)??{},H=T?.fullName??"",z=function(e,a){let{name:n=""}=e.find(e=>e.key===a)??{};return n}(d.data??[],c),F=C(E.data??[],o),w=T?.username??"";return(0,A.jsx)(S,{ageBucketMatch:b,brandName:H,country:z,deviceMatch:y,genderMatch:f,geoPostalCode:v,geoRegion:k,interestMatch:U,isActAlikeMatched:h,isCustomerListMatched:m,isEngagementMatched:u,isExpandTargetingMatched:M,isFromGPSLocation:D,isPlPersonaMatched:G,isShoppingProspectingMatched:x,isShoppingTargetingRematched:O,isVisitorMatched:L,language:F,localeMatch:B,onDismiss:a,thirdPartyAdAttributes:{isEligibleForPromotedPartnership:R,promotedPartnershipAttributionName:P,promotedPartnershipAdvertiserName:N},userName:w})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/12058-b8b91d9f3f4ed3bf.mjs.map