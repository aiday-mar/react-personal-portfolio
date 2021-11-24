export const posts = {
  results: [
    {
      id: 1,
      title: 'Using Spark to build a recommendation engine',
      date: '13/09/2021',
      body: '<div> <p>I need to render this article</p> </div>',
      icon: 'https://logowik.com/content/uploads/images/scala3486.jpg',
    },
    {
      id: 2,
      title: 'Optimizing the poisson algorithm execution using CUDA in C++',
      date: '13/09/2021',
      body: 'Describe the project',
      icon: 'https://jtes.net/wp-content/uploads/2015/05/NVIDIA_CUDA_V_2C_r.jpg',
    },
    {
      id: 3,
      title:
        'Creating a neural network to classify numbers using Keras in Python',
      date: '13/09/2021',
      body: 'Talk about the project for EPFL',
      icon: 'https://www.logiciels.pro/wp-content/uploads/2021/05/keras-avis-prix-alternatives-logiciel.webp',
    },
    {
      id: 4,
      title: 'Creating a travelling website using Angular',
      date: '13/09/2021',
      body: 'Talk about the Angular project',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    },
    {
      id: 5,
      title:
        'Using GraphQL, Apollo and Websocket.IO to create a studying application',
      date: '13/09/2021',
      body: 'Talk about the GraphQL project',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png',
    },
    {
      id: 6,
      title: 'Coding Portfolio built using React',
      date: '16/11/2021',
      body: "This portfolio website is built using React. This website has several key features. <br/><br/> <b> Routing </b> <br/><br/> The routing in this portfolio is made with the react-router-dom library, specifically using the Switch and Route components. In order to be able to access the posts on this site, I parse the request URL by fetching the article corresponding to the ID in the URL, as follows : <br/><br/> <div style='text-align:center; font-family: consolas'> &ltSwitch&gt &ltRoute path='/post/:id' component={Post} /&gt &lt/Switch&gt </div> <br/><br/> <b> Navigation Bar </b> <br/><br/> The navigation bar is configured to be sticky, so that it sticks to the top of the navigation window. <br/><br/> <b> Introductory CSS animation </b> <br/><br/> The CSS animations is displayed only once per session, and only when one accesses the main page of the website. That is if a person access a specific article, even on a new session, the CSS animation will not be displayed. The constructor in the routing component is as follows : <br/><br/> <div style='margin-left: 200px; font-family: consolas'><div> <div><span>constructor</span><span>()&nbsp;{</span></div> <div><span>&nbsp; &nbsp; super</span><span>();</span></div> <br /> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>window</span><span>.</span><span>location</span><span>.</span><span>pathname</span><span>&nbsp;===&nbsp;</span><span>'/'</span><span>)&nbsp;{</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>state</span><span>&nbsp;=&nbsp;{</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>animate:</span><span>&nbsp;</span><span>true</span><span>,</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>showIntro:</span><span>&nbsp;</span><span>true</span><span>,</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span><span>else</span><span>&nbsp;{</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>state</span><span>&nbsp;=&nbsp;{</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>animate:</span><span>&nbsp;</span><span>false</span><span>,</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>showIntro:</span><span>&nbsp;</span><span>false</span><span>,</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>myRef</span><span>&nbsp;=&nbsp;</span><span>React</span><span>.</span><span>createRef</span><span>();</span></div> <div><span>}</span></div> </div></div> <br/> <br/>In the render method we have: <br/> <br/> <div style='margin-left: 200px; font-family: consolas'> <div><span>render</span><span>()&nbsp;{</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;(</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>div</span><span>&nbsp;</span><span>className</span><span>=</span><span>'Body'</span><span>&gt;</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{</span><span>this</span><span>.</span><span>state</span><span>.</span><span>animate</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>this</span><span>.</span><span>state</span><span>.</span><span>showIntro</span><span>&nbsp;?&nbsp;</span><span>&lt;</span><span>Intro</span><span>&nbsp;</span><span>/&gt;</span><span>&nbsp;:&nbsp;</span><span>null</span><span>}</span></div> <div><span>&nbsp; &nbsp; &nbsp; &nbsp; ...</span><span></span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span></div> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;);</span></div> <div><span>}</span></div> </div> </br></br> And we have the following ComponentDidMount method: <br/> <br/> <div style='font-family:consolas; margin-left:200px'><div><span>componentDidMount</span><span>()&nbsp;{</span></div><div></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>el</span><span>&nbsp;=&nbsp;</span><span>document</span><span>.</span><span>querySelector</span><span>(</span><span>'.loader-container'</span><span>);</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>el</span><span>)&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>el</span><span>.</span><span>remove</span><span>();&nbsp;</span><span>//&nbsp;removing&nbsp;the&nbsp;spinner&nbsp;element</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>setState</span><span>({&nbsp;</span><span>loading:</span><span>&nbsp;</span><span>false</span><span>&nbsp;});&nbsp;</span><span>//&nbsp;showing&nbsp;the&nbsp;app</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></div><div><span></span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>window</span><span>.</span><span>location</span><span>.</span><span>pathname</span><span>&nbsp;===&nbsp;</span><span>'/'</span><span>)&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>window</span><span>.</span><span>sessionStorage</span><span>.</span><span>getItem</span><span>(</span><span>'firstLoadDone'</span><span>)&nbsp;===&nbsp;</span><span>null</span><span>)&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>setState</span><span>({</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>animate:</span><span>&nbsp;</span><span>true</span><span>,</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>window</span><span>.</span><span>sessionStorage</span><span>.</span><span>setItem</span><span>(</span><span>'firstLoadDone'</span><span>,&nbsp;</span><span>1</span><span>);</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>document</span><span>.</span><span>body</span><span>.</span><span>style</span><span>.</span><span>overflow</span><span>&nbsp;=&nbsp;</span><span>'hidden'</span><span>;</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span><span>else</span><span>&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>setState</span><span>({</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>animate:</span><span>&nbsp;</span><span>false</span><span>,</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div><div><span></span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>this</span><span>.</span><span>state</span><span>.</span><span>animate</span><span>&nbsp;==&nbsp;</span><span>true</span><span>)&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>setTimeout</span><span>(()&nbsp;</span><span>=&gt;</span><span>&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>myRef</span><span>.</span><span>current</span><span>.</span><span>scrollIntoView</span><span>({</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>behavior:</span><span>&nbsp;</span><span>'smooth'</span><span>,</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>block:</span><span>&nbsp;</span><span>'start'</span><span>,</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>setTimeout</span><span>(()&nbsp;</span><span>=&gt;</span><span>&nbsp;{</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>document</span><span>.</span><span>body</span><span>.</span><span>style</span><span>.</span><span>overflow</span><span>&nbsp;=&nbsp;</span><span>'unset'</span><span>;</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>state</span><span>.</span><span>showIntro</span><span>&nbsp;=&nbsp;</span><span>false</span><span>;</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>forceUpdate</span><span>();</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</span><span>1000</span><span>);</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</span><span>3000</span><span>);</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div><div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></div><div><span>}</span></div></div>",
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      id: 7,
      title: 'Building an Android blogging app using Java',
      date: '16/11/2021',
      body: 'Describe the project',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1200px-Android_robot.svg.png',
    },
    {
      id: 8,
      title: 'Building an ASP .NET website',
      date: '16/11/2021',
      body: 'Describe the project',
      icon: 'https://www.softfluent.fr/wp-content/uploads/2019/10/net-MVC.png',
    },
    {
      id: 9,
      title: 'Using C++ to find eigenvalues and eigenvectors',
      date: '16/11/2021',
      body: 'Describe the project',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    },
  ],
};
