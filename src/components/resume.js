import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Andrew Tawadros</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I’m a full-stack software developer and an Accountant, who is passionate about automation and application security. I'm now working for H&R block as a tax associate. but I'm looking to shift my career to tech as I'm very passionate about it

When I'm not working, you can find me cycling with my Meetup group, practicing nature photography.

Let’s build awesome apps together!</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>615 Brook st, linden, NJ</p>
            <h5>Phone</h5>
            <p>(202) 403-9549</p>
            <h5>Email</h5>
            <p>andrewgergess@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Akhbar el Youm Academy"
              schoolDescription=""
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="Rutgers coding Bootcamp"
                 schoolDescription=""
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="customer service agent"
              jobDescription=""
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Accountant"
                jobDescription=""
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
