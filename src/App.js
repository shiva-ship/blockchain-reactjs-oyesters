import React from 'react';

import './App.css';
import logo from './certificate .svg';
import course from './course-image.svg'
import user from './user.svg';



function App() {
  return (
    <div className="App">
       <header>
			<p class="text-center">This certificate is powered by Oyesters training</p>
		</header>
    <div class="container-fluid">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 col-lg-8 col-12">
                    <img src={logo} alt="img"  className="cc img-fluid mt-4" height="100%"/>
                </div>
      
           <div class="m1 row">  
            <div class="pt-4 one col-md-3 col-lg-3 col-12">
   		        <div class="class1">
					   <div class="right-side-bar">
					<div class="content">

						<h4 class="mb-4 ml-2  ">Certificate Recipent:</h4>
						<div class="user-name">
							<img src={user} alt="" class="img-side"/>
							<span class="font-size-22 name  ">Azfar Uzair</span>
						</div>			
						<h2 class="mb-1 ml-2 mt-3">About Course</h2>
						<div class="about-course p-1">
							<img src={course} alt="" / >
                <br></br>

							<h4 class="font-size-22 course-title p-1 m-1">Internet Of Things</h4>
							<span class="issue-date font-size-18 p-1">Issue Date: <span class="date">22 June 2020</span></span>
						  <br>
             
              </br>
              <br>
              </br>
							<span class="issue-id font-size-18 p-1">Issue Id: <span class="id">FF123123</span></span>
						</div>
			
						<div class="buttons p-3">
							<button class="btn p-1 m-1">
								<i class="fad fa-download"></i>
								Download
							</button>
				
							<button class="btn p-1 m-1">
								<i class="fad fa-share"></i>
								Share
							</button>
						</div>
					</div>
				</div>
		    </div>
		 </div>
	 </div>
   </div>
  </div>
  </div>
  <footer class="foot">
	<p class="text-center" >Copyright©2020 Oyesters Traning All Rights Reserved  </p>
</footer>	
  </div>
 
  );
}

export default App;
