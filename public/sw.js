if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>s(e,r),t={module:{uri:r},exports:o,require:c};a[r]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.png",revision:"6a3a0a11ee78c06a96439bd55340fcf7"},{url:"/2.png",revision:"18d413a385552aee6c1a0b338c5e61fd"},{url:"/_next/app-build-manifest.json",revision:"cf4041e7e31ca11346660afe8df669fe"},{url:"/_next/static/chunks/12-e52fb0985c20a193.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/1517-626a92c25f558d5b.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/164-03fcc42bf93c8eaf.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/2041-f1992a51e263540f.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/2170a4aa-bed2c5fbcb41f449.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/2931-c033158847a07abb.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/3888-7f78c3fd04307454.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/4505-5e405f1f4ef04ff9.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/4822-ddac9568c7e685f9.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/4839-2bbf444e5513748c.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/4bd1b696-ada310df44235c21.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/5372-25d8eab5a4632c8f.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/5565-a3748f5b4e10200c.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/6814-546585211098a613.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/7388-3aaec0eee550467c.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/7701-c23aafa58ade9d89.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/7829-f7f7764f3c5b6903.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/814-1897bc88aa3d5341.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/8936-2983115311324926.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/9625-34ca7175cf78f221.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/9916-2d7da892ddf3da8b.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/9945-ea0985ef95d788af.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(auth)/auth/signin/page-79bac0c66d808ad8.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(auth)/auth/signup/page-8f32466a51119654.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(auth)/layout-12832a0d0aac845e.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(auth)/loading-9918aa2181cef753.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(guru)/layout-a841895e9a59468d.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(guru)/loading-f324401bd7474228.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(guru)/teacher/hafalan/page-9bae319aae905478.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(guru)/teacher/murojah/page-ef02ac9ed223f5a7.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(guru)/teacher/mutqin/page-598631767560b28f.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(guru)/teacher/page-cdba3d86e6549977.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/layout-44db0986f4114196.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/loading-764e95d8fba337a8.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/operator/class/page-8c500204f9d20207.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/operator/page-a46c97115f4e5279.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/operator/parent/page-e9a6af412eee7faf.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/operator/role/page-c7682b9695657628.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/operator/student/page-35daea9966aca889.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(operator)/operator/teacher/page-d101b16d6a589ccf.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(parent)/layout-870486a01506e7bd.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(parent)/loading-4cb30a519256e4d5.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(parent)/parent/children/page-6c354fda3f9bd417.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/(parent)/parent/page-352c1d94bbaab240.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/_not-found/page-a0723c4c27ace77f.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-400f27a6b55b42b4.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/api/trpc/%5Btrpc%5D/route-8856f3d2509cc886.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/layout-b4893c244dbcab73.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/page-59a544aec7225613.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/app/user/page-da2e9357d68b17c2.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/framework-b902de12964d94d6.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/main-app-cbe7d39d412e3b65.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/main-e8b5d2fb1afbec31.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/pages/_app-00b41aece417ee52.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/pages/_error-6b43ce36a8d09a61.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-cb7398c71718af64.js",revision:"ed5J_3RAjXaR-ksBxz6rH"},{url:"/_next/static/css/15376ef31abcc720.css",revision:"15376ef31abcc720"},{url:"/_next/static/css/43c03eacb2b2999a.css",revision:"43c03eacb2b2999a"},{url:"/_next/static/css/cc010d6e98802671.css",revision:"cc010d6e98802671"},{url:"/_next/static/ed5J_3RAjXaR-ksBxz6rH/_buildManifest.js",revision:"206e1b623789bc7a99af905f2250e784"},{url:"/_next/static/ed5J_3RAjXaR-ksBxz6rH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1.de9708a1.png",revision:"6a3a0a11ee78c06a96439bd55340fcf7"},{url:"/_next/static/media/2.6772772a.png",revision:"18d413a385552aee6c1a0b338c5e61fd"},{url:"/_next/static/media/7336262c93a38de8-s.p.otf",revision:"43269f118299246de0cf264e04ae2680"},{url:"/_next/static/media/dd994fbf464986f0-s.p.woff2",revision:"69e22700847efcd4251ca0ca1f836515"},{url:"/_next/static/media/e97026df054cf2a3-s.p.woff2",revision:"fc002557f215681e64f2ba19c2fc08f3"},{url:"/_next/static/media/google.cf5bb96d.svg",revision:"aad5f33a68ea920929d322e774d3b409"},{url:"/android/android-launchericon-144-144.png",revision:"6db2ea3492a42610c21708819a692884"},{url:"/android/android-launchericon-192-192.png",revision:"a3dc6fc1b522e2590387a28ace64b70d"},{url:"/android/android-launchericon-48-48.png",revision:"68349311b4f560e26a530073a3ca54ec"},{url:"/android/android-launchericon-512-512.png",revision:"3858197ad4569d5ecc739243c0caec94"},{url:"/android/android-launchericon-72-72.png",revision:"6577d7b5e5452be5c177ad43562d9952"},{url:"/android/android-launchericon-96-96.png",revision:"2d9f0c0c566ed131c0451a5bf2df14d0"},{url:"/android/icon512_maskable.png",revision:"4697b251ac7b705b6591584fd9e629e3"},{url:"/android/icon512_rounded.png",revision:"dc0b4b46c7c35e0494c35a514d085f01"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/google.svg",revision:"aad5f33a68ea920929d322e774d3b409"},{url:"/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/ios/100.png",revision:"635fb15c6501f67b3f7fbbfa9f8279fe"},{url:"/ios/1024.png",revision:"a27b6cdcff48084f50e648286cd6c43e"},{url:"/ios/114.png",revision:"955416837d62b34f76f4f3ba4408b832"},{url:"/ios/120.png",revision:"48fe65e436857ee3fe1b34d032d5821b"},{url:"/ios/128.png",revision:"8a46781d0bb98272bc20a4c0a67b10b9"},{url:"/ios/144.png",revision:"6db2ea3492a42610c21708819a692884"},{url:"/ios/152.png",revision:"c8090145729ab6a1e7c8f3a1502b2ad4"},{url:"/ios/16.png",revision:"f9040672ff73fc153d259a5d627ea4f3"},{url:"/ios/167.png",revision:"9ad3619851af23f2476d273422b9d470"},{url:"/ios/180.png",revision:"d9b8e08e4d4ac955aa8903cf1f17cc68"},{url:"/ios/192.png",revision:"a3dc6fc1b522e2590387a28ace64b70d"},{url:"/ios/20.png",revision:"0231083c23af5e0dc4fd4fa04b09c07c"},{url:"/ios/256.png",revision:"23b928115c223987df080e586d4d0239"},{url:"/ios/29.png",revision:"7cda87d3bd80147eb13fffb1cff4a4f3"},{url:"/ios/32.png",revision:"210f99d0e1e18bcb7a3abd5b2fdd31b4"},{url:"/ios/40.png",revision:"b322d7fa63568ce002ac1e743ec260a9"},{url:"/ios/50.png",revision:"1fbb5d8617c726551fea1b798303f781"},{url:"/ios/512.png",revision:"3858197ad4569d5ecc739243c0caec94"},{url:"/ios/57.png",revision:"83d6f2c42bbc3a4c7cb0814387329056"},{url:"/ios/58.png",revision:"6356ada0f1d473cc18b9e84690e5f596"},{url:"/ios/60.png",revision:"a3682c3e4b0d8192fb40a3ab46195429"},{url:"/ios/64.png",revision:"c2a5df37055b4407904912a9da2d53fc"},{url:"/ios/72.png",revision:"6577d7b5e5452be5c177ad43562d9952"},{url:"/ios/76.png",revision:"123d162637cf2e930bc5f9ea8fb58d32"},{url:"/ios/80.png",revision:"f2de7eb88f947130385cf15c41a8ef86"},{url:"/ios/87.png",revision:"b7505226078999cb61f5f5ac828b868c"},{url:"/manifest.json",revision:"c4caabcdbbe842eaddde7aceda87a28b"},{url:"/manifestt.json",revision:"feb052b57d3b5809f012c017bf082a6d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"},{url:"/windows11/LargeTile.scale-100.png",revision:"9b71e043756b7e6a33e5365f9ddd2e44"},{url:"/windows11/LargeTile.scale-125.png",revision:"8b4c0d73ce81eee2b381433ce427e738"},{url:"/windows11/LargeTile.scale-150.png",revision:"23bedaf40a0237e9ef0949ba5be9acc9"},{url:"/windows11/LargeTile.scale-200.png",revision:"54ca75812063ba8eba3cc9759a36e49f"},{url:"/windows11/LargeTile.scale-400.png",revision:"e4ac707a60af47c7baed7daae7c522aa"},{url:"/windows11/SmallTile.scale-100.png",revision:"6c86e5f1be0b535cf56098ff918a15ad"},{url:"/windows11/SmallTile.scale-125.png",revision:"1583466f618aff3f1fae0b5e8652e1ed"},{url:"/windows11/SmallTile.scale-150.png",revision:"d406899b4207d198d19e61b1045835a2"},{url:"/windows11/SmallTile.scale-200.png",revision:"b33650d2ef51518b3f9ca52109ff7ad3"},{url:"/windows11/SmallTile.scale-400.png",revision:"16662ae993b8003bf4ceae33b5f8f453"},{url:"/windows11/SplashScreen.scale-100.png",revision:"a03086b5b08d650f42d68a66186a8717"},{url:"/windows11/SplashScreen.scale-125.png",revision:"dbfafece9d26dda844194086b1e7eb84"},{url:"/windows11/SplashScreen.scale-150.png",revision:"db4b3aae53dc8230dcd33cf10f345bac"},{url:"/windows11/SplashScreen.scale-200.png",revision:"174154fe3afdbd561e0ef74dc323c6f3"},{url:"/windows11/SplashScreen.scale-400.png",revision:"5af05a1830ec3f9201597b02a5b2587b"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"f06a8a95ad56764ff423dd14295f4b5a"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"aa57764337e3e013a366fb12317209c3"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"bd1d69028e9ec0c22164b8b897d17431"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"ecf80424e907e0fcd595bbda95aea785"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"eeb931a4bdc2e260151a80b308ae5aaa"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"74d82c219ec24e3fb0ce67b08dfa65fb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"af5f26e410eee666ba8add2a60f956fb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"e4a76aa82ee2b8557d9c189c40417ea3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ef427e4cd4e1cae7e4f262db5e6b15cb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"656a0008da85d132e6733e6e685a5fd5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"a86df047752e6168684924bef8a91002"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"730a2f9df4c7812c61ae057fc43e0873"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"ea2a4d603c346e75471e139682f05e97"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"2b28563fbecb4178fbb54e05ac7feada"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"da5cff67dba2462cecc63e99258825ff"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"8a94537e79c6b68d7c454050621c0659"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"bc13418c0330fc8b2fa4f6f7e9b884a3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"65ee0d98e9ea77246cb2e7c17111f33e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"f17657b5fae0ad91a145c6de03157ee7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"1b5919c1e9064c6b17a809cdc055f829"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"74d82c219ec24e3fb0ce67b08dfa65fb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"af5f26e410eee666ba8add2a60f956fb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"e4a76aa82ee2b8557d9c189c40417ea3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ef427e4cd4e1cae7e4f262db5e6b15cb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"656a0008da85d132e6733e6e685a5fd5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"a86df047752e6168684924bef8a91002"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"730a2f9df4c7812c61ae057fc43e0873"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"ea2a4d603c346e75471e139682f05e97"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"2b28563fbecb4178fbb54e05ac7feada"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"da5cff67dba2462cecc63e99258825ff"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"8a94537e79c6b68d7c454050621c0659"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"bc13418c0330fc8b2fa4f6f7e9b884a3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"65ee0d98e9ea77246cb2e7c17111f33e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"f17657b5fae0ad91a145c6de03157ee7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"1b5919c1e9064c6b17a809cdc055f829"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"2b28563fbecb4178fbb54e05ac7feada"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"91c5780dbd74685ae0a5a2850162fea2"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"ff3a9e47a90436742c0accd4596f6c31"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"045965c83e1c7899bc77863786eca904"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"b2bed480dbd3cb8d0883c0344a9299f8"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"74d82c219ec24e3fb0ce67b08dfa65fb"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"af5f26e410eee666ba8add2a60f956fb"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"e4a76aa82ee2b8557d9c189c40417ea3"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"ef427e4cd4e1cae7e4f262db5e6b15cb"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"656a0008da85d132e6733e6e685a5fd5"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"a86df047752e6168684924bef8a91002"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"730a2f9df4c7812c61ae057fc43e0873"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"ea2a4d603c346e75471e139682f05e97"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"2b28563fbecb4178fbb54e05ac7feada"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"da5cff67dba2462cecc63e99258825ff"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"8a94537e79c6b68d7c454050621c0659"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"bc13418c0330fc8b2fa4f6f7e9b884a3"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"65ee0d98e9ea77246cb2e7c17111f33e"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"f17657b5fae0ad91a145c6de03157ee7"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"1b5919c1e9064c6b17a809cdc055f829"},{url:"/windows11/StoreLogo.scale-100.png",revision:"1fbb5d8617c726551fea1b798303f781"},{url:"/windows11/StoreLogo.scale-125.png",revision:"a0694b5ce5eeda9c3cff95cb6a71ea2a"},{url:"/windows11/StoreLogo.scale-150.png",revision:"413108a7530d639611b3985fc6b2a3ce"},{url:"/windows11/StoreLogo.scale-200.png",revision:"635fb15c6501f67b3f7fbbfa9f8279fe"},{url:"/windows11/StoreLogo.scale-400.png",revision:"d650146b54a032a81f428d9eb02771ee"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"4ca03d98d04737522e02707f6ed10a52"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"59743c708d4431bdf66b8aa0661290af"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"e5330f542e5be1cbc4ae7ace0958638f"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"a03086b5b08d650f42d68a66186a8717"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"174154fe3afdbd561e0ef74dc323c6f3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
