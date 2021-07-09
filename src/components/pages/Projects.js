import React from 'react'
import '../../App.scss'
import ReactPlayer from 'react-player'
import ProjectVideo from '../ProjectVideo'


function Projects() {
    return (
        <>
            <section class="text-center pb-3 space-top">
                <div className='container'>
                    <h2 className='section-title'>MY WORK</h2>
                    <div className='underline'></div>
             
                
                    <div className='projects'>
                    <div className='project'>
                             <ProjectVideo  url='https://youtu.be/8tsU01FNO8I' title="Iron Gym Platinum"/> 
                        </div> 
                    <div className='project'>
                             <ProjectVideo  url='https://youtu.be/qezBKmfDa3Y' title="SoulXpress Usyd promo video"/> 

                        </div> 

                    <div className='project'>
                             <ProjectVideo  url='https://youtu.be/8Dk2215smvw' title="Stop music video by Tk"/> 
                        </div> 
                    <div className='project'>
                            <ProjectVideo  url='https://youtu.be/971yh19K23k' title="UNSW MODSOC 2021 PROMO VIDEO"/>
                    </div>
                        <div className='project'>
                             <ProjectVideo  url='http://www.youtube.com/watch?v=Z12UvF82BJ0&t' title="Dante 20 music video"/> 
                        </div> 
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/1zmp8eVvavg' title="Share With Oscar uni project video" />
                        </div>
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=PbMBsEsRlrE' title="dante thursday music video"/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/ibY-ZKUVvyA' title="Steps to Problem Solving: An Engineer's Guide - Book Teaser"/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/pZYnPs9caO8' title="Steps to Problem Solving: An Engineer's Guide - Official Book Trailer"/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=zKwkc92ubGA' title="Robin's Breaking (Beginners Class)"/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=9X08-17Uoyc' title="Lionel's Girl Style (Beginners Class)"/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/s1Ht_11s-1k' title="Fashion Shoot"/>
                        </div>  
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=rSlDqYWwKlE' title="Barber in 60"/>
                        </div>  
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=MiVtLIN__1c' title="Sesame Street Broadway"/>
                        </div>  
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=O9E1153wZx4' title="101KISSA"/>
                        </div>   

                    </div>
                    </div>
            </section>
      
        </>
    )
}

export default Projects
