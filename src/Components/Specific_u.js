import React from 'react';

class Specific_u extends React.Component
{
    render()
    {
        return(
            <div>
 <div class = "page1"><table>
    <br/>
    <tr><td><br/><font size="4"> <font size="5"><b>Project Requirements</b></font></font></td></tr>
  <tr><td><textarea rows="10" cols="70" auto focus>Maximum display dimensions are as follows:
76 cm (30 in) deep
122 cm (48 in) wide
274 cm (108 in) high, including the table height. Table height should not exceed 91 cm (36 in).

An Institutional Review Board (IRB) MUST review and approve all projects dealing with human subjects BEFORE experimentation begins.

IRB signatures are required on Form 4A, in addition to the SRC signature on Form 1B. When students conduct questionnaires, the students, their parents, and the school are responsible for protecting the rights and welfare of the participating human subjects.

The school MUST monitor administration of all questionnaires; seeing that all legal requirements are met and that informed consent forms are used for any subjects less than 18 years of age.

All informed consent forms (Form 4B) MUST be available with the project during judging. Form 4B MUST be attached to the registration with all other required forms. -- DO NOT SEND THE COMPLETED QUESTIONNAIRES TO THE MSEF OFFICE. However, they must be made available during the judging process.

Specific federal laws that attention should be paid to are as follows: 1) CFR, Title 45(Public Welfare), Part 47-Protection of Human Subjects (45cfr47); 2) CFR, Title 45(Public Welfare) Part 5-Privacy Act Regulations (45CFR5b); and 3) Public Health Service Act 42 USC, S 241 (d) (Protection of Privacy of Individuals who are Research Subjects). These documents are available from the Office of Protection from Research Risks, National Institutes of Health, Bldg 31 Room 5B63, 9000 Rockville Pike, Bethesda, MD 20892
</textarea></td></tr>

<tr><td><br/> <font size="5"><b> Project summary</b></font></td></tr>
<tr><td >
  At least 5 sentences; you may type the summary</td></tr>
  <tr><td class=" text1">in the box or upload a scan below.</td></tr>

<tr><td><br/> <textarea rows="4" cols="50" name="project"  required="required" autofocus></textarea></td></tr>
<tr><td></td><td><b>OR</b></td></tr>
<tr><td><br/><font size='5'><b>Project Summary Upload</b></font></td></tr>
  <tr><td><input id="a" name="a" type="file" required/></td></tr>

    <tr><td><br/><font size="4">(Upload any Specialty Forms as needed.)</font></td></tr>
</table>
</div>

    <div class="page1">
        <table style={{ paddingRight : "50px"}}>


         <tr><td><br/><font size="5"><b>Form Submission</b></font></td></tr>
            <tr>
            <td><textarea rows="10" cols="50" name="mfi_4_a_ii"  id="project" required="required" autofocus>

                    Regulated Research Institutional/Industrial Setting Form (1C)
                    Qualified Scientist Form (2)
                    Risk Assessment Form (3)
                    Human Participants Form (4)
                    Human Informed Consent Form
                    Vertebrate Animal Form (5A)
                    Vertebrate Animals Form (5B)
                    Potentially Hazardous Biological Agents Risk Assessment (6A)
                    Human & Vertebrate Animal Tissue Form (6B)
                    Continuation Projects Form (7)






                </textarea></td></tr>
                <tr><td><br/><input  type="file"   id="dis" required/></td></tr>






        </table>
    </div>
</div>
        );
    }
}
export default Specific_u;