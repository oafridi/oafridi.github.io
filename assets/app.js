const projects = {
  'ai-school-search': {number:'01',category:'GreatSchools / AI & search',title:'AI School Search',lede:'Helping families find schools in their own words.',body:'I built an AI-powered search experience that lets families describe what they are looking for in natural language, then find schools that fit.',sections:[['My contribution','Built the search engine and supporting pipelines across the application layer, search infrastructure, and AI services, with a focus on relevance and the user journey.'],['The wider picture','This work sits within my senior engineering role at GreatSchools, spanning full-stack product development and platform architecture.']],links:[['Visit GreatSchools','https://www.greatschools.org/']]},
  'developer-api': {number:'02',category:'GreatSchools / Developer platform',title:'GreatSchools API',lede:'School information, built for other products to use.',body:'I designed and built a self-service REST API with payment processor integration and usage-based billing. It serves more than one million queries per day.',sections:[['My contribution','Owned design and implementation of the API and its payment and usage-based billing integration.'],['The platform','A programmatic route to GreatSchools school information and quality metrics, supporting applications that need school data.']],links:[['Explore the API documentation','https://www.postman.com/greatschools/greatschools-workspace/collection/4lpjku2/greatschools-enterprise-data-license-api']]},
  'customerlobby': {number:'03',category:'CustomerLobby / Product & data',title:'CustomerLobby',lede:'Building through a business-changing pivot.',body:'As one of four engineers, I helped pivot CustomerLobby from a reviews product into a customer retention platform. The company saw roughly eightfold revenue growth and was acquired by EverCommerce.',sections:[['My contribution','Delivered revenue-generating projects end to end, from system design and backend implementation to testing. Built high-throughput integrations in Elixir and Python, and led platform migrations and upgrades across Rails, MySQL, and Python.'],['Machine learning & data','Designed and implemented a pipeline to extract, clean, and label large volumes of unstructured external data, achieving approximately 85% accuracy while reducing manual effort.'],['The team','Mentored junior engineers, contributed to frontend development, and helped lead engineering and QA interviews.']],links:[]},
  'chatgpt-integration': {number:'04',category:'GreatSchools / AI integration',title:'GreatSchools × ChatGPT',lede:'Connecting school information to a conversational interface.',body:'I built the initial version of GreatSchools’ MCP server and backend API so ChatGPT users could direct requests to GreatSchools.',sections:[['My contribution','Built the initial server and backend integration that connects ChatGPT requests with GreatSchools information.'],['The focus','Make school information useful within an AI-assisted conversation, alongside my broader work on search and APIs.']],links:[['Visit GreatSchools','https://www.greatschools.org/']]},
  'data-cloud': {number:'05',category:'GreatSchools / Platform engineering',title:'Data & Cloud Infrastructure',lede:'Making the systems underneath easier to rely on.',body:'My platform work at GreatSchools spans cloud migrations and internal data tools, supporting the products built on top of them.',sections:[['Cloud migrations','Migrated legacy on-premise systems to cloud-hosted infrastructure, including Jira, Git, and OpenSearch, reducing operational overhead and improving maintainability.'],['Data quality','Built a Python workflow to deduplicate millions of school records in a relational database, reducing the amount of manual cleanup required.']],links:[]},
  'atlassian': {number:'06',category:'Atlassian / Tools & search',title:'Atlassian Tools & Search',lede:'Better tools for the people supporting the product.',body:'At Atlassian, I built internal applications to automate operational workflows and improved Lucene-based indexing and search in Confluence.',sections:[['Workflow automation','Built plugin approval tooling, issue-routing automation, and ticket escalation systems.'],['Search & mentoring','Improved Confluence indexing and search, and mentored support engineers in scripting and basic software development.']],links:[]},
  'matchnurse': {number:'07',category:'Matchnurse / CTO & co-founder',title:'Matchnurse',lede:'A marketplace for temporary healthcare work.',body:'I co-founded a marketplace connecting employers with temporary healthcare workers, building and operating the platform end to end.',sections:[['My contribution','Built the application, deployed and operated it, supported users, and iterated on the early product. The stack included PHP, CodeIgniter, and JavaScript.'],['Growing the network','Helped grow the network to more than 12,000 pharmacists and 30,000 nurses, and secured a place in a competitive incubator.']],links:[]},
  'cgi': {number:'08',category:'Logica / CGI / Enterprise software',title:'Workplace Systems at Logica / CGI',lede:'Turning everyday operational work into useful software.',body:'Worked directly with clients to understand their requirements and translate them into production applications.',sections:[['Security access automation','Architected and built the majority of an application automating security access workflows, saving several weeks of manual effort each year.'],['Content at scale','Architected and built a content management system used by more than 40,000 employees. Received multiple awards, including a Diamond Award from external clients.']],links:[]},
  'home-automator': {number:'09',category:'Hardware & automation',title:'Home Automator',lede:'A little code. A radio signal. A home that listens.',body:'A Node.js application using a microcontroller and RF transmission to schedule control of wireless sockets. An experiment in connecting software to everyday objects.',sections:[['The idea','Use a small application and radio transmission to control wireless power sockets on a schedule.'],['The ingredients','Node.js, a microcontroller, and RF transmission. The project connects application logic with hardware control.']],links:[['View the code','https://github.com/oafridi/home_automation'],['Read the RF notes','https://oafridi.github.io/microcontrollers/2014/10/03/RF-transmitter.html']]},
  'cultivated-commerce': {number:'10',category:'Community platform',title:'Cultivated Commerce',lede:'Connecting homegrowers through what they grow.',body:'An online platform for homegrowers to interact and exchange produce, built with Ruby on Rails and JavaScript.',sections:[['The idea','Give people who grow their own food a place to connect with one another and exchange what they produce.'],['The ingredients','Ruby on Rails and JavaScript, bringing a community idea into a web application.']],links:[['View the code','https://github.com/oafridi/cultivated_commerce']]},
  'background-jobs': {number:'11',category:'Teaching & systems',title:'Background Jobs',lede:'Making the work behind the scenes easier to explain.',body:'A demonstration application using Redis and Sidekiq, created for a talk to students at a developer bootcamp.',sections:[['The idea','Make background processing more concrete through a working example that students can explore.'],['The ingredients','Redis and Sidekiq, with the demonstration application available as a reference.']],links:[['Explore the demo code','https://github.com/oafridi/background_demo']]},
  'la-corneta': {number:'12',category:'An early Rails project',title:'La Corneta Taqueria',lede:'An early project, close to home.',body:'One of my first Ruby on Rails applications, built for my local taqueria.',sections:[['The idea','Explore building a web application around a familiar local business.'],['From the archive','This project is part of the early work collected on my original website.']],links:[['View the original repository','https://bitbucket.org/sircommitsalot/lacorneta'],['Original project listing','https://oafridi.github.io/projects/index.html']]}
};
const dialog=document.getElementById('project-dialog');
let lastTrigger;
let returnHash=location.hash.startsWith('#project/')?'#work':location.hash;
function openProject(key,trigger){
  const p=projects[key]; if(!p)return; lastTrigger=trigger;
  if(!location.hash.startsWith('#project/'))returnHash=location.hash;
  history.replaceState(null,'','#project/'+key);
  document.getElementById('dialog-category').textContent=p.category;
  document.getElementById('dialog-number').textContent=p.number;
  document.getElementById('dialog-title').textContent=p.title;
  document.getElementById('dialog-lede').textContent=p.lede;
  const body=document.getElementById('dialog-content');body.replaceChildren();
  const intro=document.createElement('p');intro.textContent=p.body;body.append(intro);
  p.sections.forEach(([title,text])=>{const h=document.createElement('h3');h.textContent=title;const paragraph=document.createElement('p');paragraph.textContent=text;body.append(h,paragraph)});
  const links=document.getElementById('dialog-links');links.replaceChildren();
  p.links.forEach(([title,url])=>{const a=document.createElement('a');a.href=url;a.textContent=title+' ↗';links.append(a)});
  if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project,button)));
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{history.replaceState(null,'',location.pathname+location.search+(returnHash||'#work'));lastTrigger?.focus()});
if(location.hash.startsWith('#project/'))openProject(location.hash.slice(9),null);
addEventListener('hashchange',()=>{
  if(location.hash.startsWith('#project/'))openProject(location.hash.slice(9),null);
  else if(dialog.open)dialog.close();
});

const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
const motion=document.getElementById('motion-toggle');
function updateMotionButton(){motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Resume 3D motion':'Pause 3D motion');motion.textContent=paused?'▷':'Ⅱ'}
updateMotionButton();motion.addEventListener('click',()=>{paused=!paused;updateMotionButton()});
reduced.addEventListener('change',e=>{paused=e.matches;updateMotionButton()});

async function start3D(){
  const T=await import('./three.module.js');
  const colors={paper:0xf7f6f2,green:0x376854,lightGreen:0x92a98a,copper:0xc17b4f,cream:0xe6dfca,ink:0x2b3430,lilac:0xb8a5d2,red:0xd95d3b};
  const mat=(color,roughness=.5,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
  const green=mat(colors.green),black=mat(colors.ink),copper=mat(colors.copper,.3,.5),cream=mat(colors.cream),purple=mat(colors.lilac,.4),red=mat(colors.red,.35),silver=mat(0xd8d8c9,.25,.55);
  function mesh(geo,material,parent,x=0,y=0,z=0){const m=new T.Mesh(geo,material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
  function box(parent,w,h,d,material,x=0,y=0,z=0){return mesh(new T.BoxGeometry(w,h,d),material,parent,x,y,z)}
  function cyl(parent,r,h,material,x=0,y=0,z=0){return mesh(new T.CylinderGeometry(r,r,h,64),material,parent,x,y,z)}
  function wire(parent,points,radius,material){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),40,radius,8,false),material,parent)}
  function board(){const g=new T.Group();
    box(g,1.7,.12,1.25,green,0,.08,0);
    for(const x of [-.75,.75])for(const z of [-.5,.5]){const ring=mesh(new T.TorusGeometry(.042,.012,8,18),silver,g,x,.15,z);ring.rotation.x=-Math.PI/2}
    box(g,.52,.1,.46,black,-.1,.19,0);
    for(let i=0;i<8;i++){box(g,.025,.035,.14,silver,-.3+i*.061,.17,-.27);box(g,.025,.035,.14,silver,-.3+i*.061,.17,.27)}
    for(let i=0;i<7;i++){box(g,.1,.11,.13,black,-.58+i*.185,.18,.48);cyl(g,.018,.16,copper,-.58+i*.185,.27,.48)}
    box(g,.28,.19,.32,silver,.64,.22,-.27);box(g,.22,.1,.24,black,.65,.23,-.35);
    for(let i=0;i<4;i++){cyl(g,.067,.19,silver,-.56,.24,-.35+i*.19);cyl(g,.052,.01,black,-.56,.34,-.35+i*.19)}
    for(let i=0;i<3;i++){const line=wire(g,[[.2+i*.08,.148,-.35],[.2+i*.08,.148,-.46],[.46+i*.06,.148,-.46]],.009,copper);line.receiveShadow=false}
    wire(g,[[.52,.18,.38],[.89,.4,.45],[.9,1,.4],[.5,1.28,.3],[.11,1.05,.3],[.13,.7,.3]],.032,copper);
    cyl(g,.045,.16,black,.52,.23,.38);
    mesh(new T.SphereGeometry(.035,16,12),mat(0xe8c56c,.3),g,.38,.18,-.3);
    return g;
  }
  function tomato(){const g=new T.Group();const fruit=mesh(new T.SphereGeometry(.57,48,32),red,g,0,.52,0);fruit.scale.set(1,.87,1);
    for(let i=0;i<5;i++){const leaf=mesh(new T.SphereGeometry(.19,20,12),green,g,Math.sin(i*Math.PI*.4)*.14,.98,Math.cos(i*Math.PI*.4)*.14);leaf.scale.set(.32,.14,1.1);leaf.rotation.y=i*Math.PI*.4}
    const stem=cyl(g,.035,.23,green,0,1.1,0);stem.rotation.z=-.25;
    return g;
  }
  function arch(){const g=new T.Group();const s=new T.Shape();s.moveTo(-.77,0);s.lineTo(-.77,.91);s.absarc(0,.91,.77,Math.PI,0,true);s.lineTo(.77,0);s.lineTo(.37,0);s.lineTo(.37,.91);s.absarc(0,.91,.37,0,Math.PI,false);s.lineTo(-.37,0);s.closePath();
    const a=mesh(new T.ExtrudeGeometry(s,{depth:.5,bevelEnabled:true,bevelSegments:4,steps:1,bevelSize:.055,bevelThickness:.055,curveSegments:48}),purple,g,0,.07,-.25);a.rotation.y=-.12;
    mesh(new T.SphereGeometry(.28,32,24),mat(0xe8b163,.35),g,0,.29,.18);
    return g;
  }
  function jobs(){const g=new T.Group();
    box(g,2.3,.13,1.18,cream,0,.16,0);
    for(let i=0;i<9;i++){const roller=mesh(new T.CylinderGeometry(.075,.075,1.06,20),silver,g,-1+i*.25,.29,0);roller.rotation.x=Math.PI/2}
    for(const x of [-.9,.9])for(const z of [-.43,.43])box(g,.09,.25,.09,black,x,0,z);
    for(let i=0;i<3;i++){const b=box(g,.55,.53,.63,i===1?purple:mat(i===0?0x8da481:0xcebcdc),-.73+i*.73,.62,0);box(g,.23,.014,.65,cream,-.73+i*.73,.893,0);box(g,.2,.17,.012,cream,-.73+i*.73,.63,.322)}
    return g;
  }
  function searchLens(){const g=new T.Group();
    cyl(g,.97,.12,cream,0,0,0);
    for(let i=0;i<3;i++){const tile=box(g,.83,.07,.33,mat(i===1?0xb8a5d2:0xe5eadf),-.12,.14+i*.1,-.35+i*.33);tile.rotation.y=-.1;box(g,.46,.014,.035,green,-.17,.18+i*.1,-.35+i*.33)}
    const lens=new T.Group();lens.position.set(.03,.83,.15);lens.rotation.set(-.12,-.15,-.45);g.add(lens);
    mesh(new T.TorusGeometry(.46,.07,16,64),green,lens,0,.29,0);
    const glass=mesh(new T.CircleGeometry(.4,48),new T.MeshStandardMaterial({color:0xb5d3c5,transparent:true,opacity:.24,roughness:.15,side:T.DoubleSide}),lens,0,.29,.01);glass.castShadow=false;
    cyl(lens,.065,.55,copper,0,-.38,0);
    const glint=mesh(new T.TorusGeometry(.34,.012,8,30,Math.PI*.45),silver,lens,0,.29,.025);glint.rotation.z=.5;
    return g;
  }
  function servers(){const g=new T.Group();
    cyl(g,.96,.12,cream,0,0,0);
    for(let i=0;i<3;i++){box(g,1.25,.27,.84,i===1?purple:green,0,.23+i*.32,0);box(g,.66,.035,.012,black,.12,.23+i*.32,.427);mesh(new T.SphereGeometry(.027,12,10),mat(0xe8c56c),g,-.45,.23+i*.32,.44)}
    wire(g,[[-.45,.08,-.5],[-.7,.22,-.6],[-.72,.8,-.5],[-.44,1.25,-.3],[.08,1.33,-.28],[.45,1.05,-.3]],.026,copper);
    return g;
  }
  const worlds=[];
  function create(canvas,type){
    const renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;
    const scene=new T.Scene();const camera=new T.OrthographicCamera(-4,4,3,-3,.1,100);camera.position.set(6.6,5.3,7.6);camera.lookAt(0,.6,0);
    scene.add(new T.HemisphereLight(0xfffcf3,0xb6b2a4,3));
    const key=new T.DirectionalLight(0xfff4df,4.2);key.position.set(-3,7,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-6;key.shadow.camera.right=6;key.shadow.camera.top=6;key.shadow.camera.bottom=-6;key.shadow.normalBias=.025;key.shadow.bias=-.0003;key.shadow.radius=4;scene.add(key);
    const fill=new T.DirectionalLight(0xd9dfef,1.5);fill.position.set(4,3,-4);scene.add(fill);
    const ground=mesh(new T.PlaneGeometry(200,200),new T.ShadowMaterial({opacity:.13}),scene,0,-.16,0);ground.rotation.x=-Math.PI/2;ground.castShadow=false;
    const root=new T.Group();scene.add(root);let baseY=0;let span;
    if(type==='hero'){
      span=6.3;
      cyl(root,1.15,.32,mat(0xe9e8df),-.35,.0,1.1);const a=searchLens();a.position.set(-.35,.2,1.1);a.rotation.y=.08;root.add(a);
      cyl(root,1.05,1.06,mat(0xe4e2dc),.65,.37,-.8);const b=arch();b.position.set(.65,.92,-.8);b.rotation.y=-.15;root.add(b);
      cyl(root,.7,.48,mat(0xe1d9c8),1.85,.08,1.02);const c=servers();c.scale.setScalar(.7);c.position.set(1.85,.36,1.02);root.add(c);
      const orbit=mesh(new T.TorusGeometry(.44,.025,8,60),copper,root,-1.75,.55,-.25);orbit.rotation.set(1.2,.15,-.4);
      mesh(new T.SphereGeometry(.13,24,16),mat(0x6d8464),root,-1.4,.03,-.15);
      root.position.x=-.2;
    }else if(type==='search'){span=3.65;root.add(searchLens());root.rotation.y=-.15;root.position.y=.1}
    else if(type==='servers'){span=3.65;root.add(servers());root.rotation.y=-.15;root.position.y=.1}
    else if(type==='hardware'){span=3.65;root.add(board());root.rotation.y=-.18;root.position.y=.1}
    else if(type==='produce'){span=3.65;const t=tomato();t.scale.setScalar(1.2);root.add(t);cyl(root,.9,.12,mat(0xebdbc7),0,-.04,0);root.position.y=.0}
    else{span=3.8;root.add(jobs());root.rotation.y=.12;root.position.y=.05}
    const element=canvas.parentElement;const state={renderer,scene,camera,root,element,visible:true,tx:0,ty:0,baseY:root.rotation.y,span,type};
    const resize=()=>{const width=element.clientWidth,height=element.clientHeight;renderer.setSize(width,height,false);const aspect=width/height;camera.left=-span*aspect/2;camera.right=span*aspect/2;camera.top=span/2;camera.bottom=-span/2;camera.updateProjectionMatrix();renderer.render(scene,camera)};
    new ResizeObserver(resize).observe(element);resize();
    element.classList.add('rendered');
    element.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=element.getBoundingClientRect();state.tx=(e.clientX-r.left)/r.width-.5;state.ty=(e.clientY-r.top)/r.height-.5});
    element.addEventListener('pointerleave',()=>{state.tx=0;state.ty=0});
    const observer=new IntersectionObserver(([entry])=>{state.visible=entry.isIntersecting},{rootMargin:'100px'});observer.observe(element);
    worlds.push(state);
  }
  for(const [canvas,type] of [[document.getElementById('hero-canvas'),'hero'],...Array.from(document.querySelectorAll('[data-scene]'),c=>[c,c.dataset.scene])]){
    try{create(canvas,type)}catch(error){console.warn('3D illustration unavailable:',error.message)}
  }
  let previous=0;
  function animate(time){requestAnimationFrame(animate);if(document.hidden||time-previous<32)return;previous=time;
    for(const w of worlds){if(!w.visible)continue;const target=w.baseY+(paused?0:w.tx*.16);w.root.rotation.y+=(target-w.root.rotation.y)*.06;w.root.rotation.x+=((paused?0:w.ty*.06)-w.root.rotation.x)*.06;w.renderer.render(w.scene,w.camera)}
  }
  requestAnimationFrame(animate);
}
start3D().catch(error=>{console.warn('Using static illustrations:',error.message);motion.hidden=true});
