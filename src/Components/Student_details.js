import React from 'react';


class student_details extends React.Component
{
    render()
    {
        return(

<div>
        
            <table cellpadding="2" width="50%" border="10" cellspacing="4">
           
            
            <tr>
            <td> Student(1) Name</td>
            <td><input type="text" name="textnames" id="textname"  required="required"/></td>
            </tr>
            
            <tr>
            <td>Student(2) Name </td>
            <td><input type="text" name="name2" id="name2"  required="required" />
            </td>
            </tr>
            
            <tr>
            <td>Student(3) Name  </td>
            <td><input type="text" name="name3" id="name3" required="required"/></td>
            </tr>
                <tr>
            <td>Student(S) Grade</td>
            <td><input type="text" name="grade3"
            id="grade3" required="required" /></td>
            </tr>
            <tr><td>Select Class:</td>
            <td><select  id="mfi_4_a_i" name="mfi_4_a_i" onChange="changetextbox()">
            <option value="-1"selected>Select Class</option>
            {/* <option value="small">Grades 1,2,3 (CLass I) </option> */}
            <option value="Medium">Grades 6 (Class II)</option>
            <option value="Large">Grades 7,8 (Class III)</option>
            <option value="Extra-Large">Grades 9,10 (Class IV)</option>
                <option value="Extra">Grades 11,12 (Class V)</option>
            </select>
            </td>
            </tr>
            <tr>
            <td>Project TItle</td>
            <td><input type="text" name="title"
            id="title"  required="required"/></td>
            </tr>
            
            <tr>
            <td>Category </td>
            <td><select name="Category">
            <option value="-1" selected>select..</option>
            <option value="100 Behavioral & Social Sciences">Behavioral & Social Sciences</option>
            <option value="200 Biochemistry">Biochemistry</option>
            <option value="300 Inorganic Chemistry">Inorganic Chemistry</option>
            <option value="400 Organic Chemistry">Organic Chemistry</option>
            <option value="500 Earth & Environmental Sciences">Earth & Environmental Sciences</option>
            <option value="700 Medicine & Health">Medicine & Health</option>
            <option value="800 Animal Science">Animal Science</option>
            <option value="900 Microbiology">Microbiology</option>
            <option value="1000 Animal Science">Animal Science</option>
            <option value="1100 Physics and Astronomy">Physics and Astronomy</option>
            <option value="1200 Engineering">Engineering</option>
            <option value="1300 Computer Science and Math">Computer Science and Math</option>
            <option value="1400 Robotics">Robotics</option>
            <option value="1500 Team Project">Team Project</option>
            
            
            
            
            </select></td>
            </tr>
            
            <tr>
            <td>School Name</td>
            <td><input type="text" name="schoolname"
            id="Schoolname" required="required"/ ></td>
            </tr>
            
            <tr>
            <td>School Phone</td>
            <td><input type="number" name="p1" id="p1" maxlength="3" width="" required="required"/> - <input type="number" name="p2" id="p2" maxlength="3" required="required"/> - <input type="number" name="p3" id="p3" maxlength="4" required="required"/> </td>
            </tr>
            
            
            </table>
          
            
            </div>
        
                  
        );
    }
}

export default student_details;