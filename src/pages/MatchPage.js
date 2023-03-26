import { Container } from '@mui/material'
import React, {useState } from 'react'
import RunSelection from '../components/RunSelection';
import Quiz from '../components/Quiz';
import { Redirect, useHistory } from 'react-router';
import Completed from '../components/Completed';
import { Prompt } from 'react-router-dom'

function MatchPage({ navigation }) {
  const [state, setState] = useState(false)
  const [selectedRun, setSelectedRun] = useState(0)



  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //     showConfirmationDialog();


  //   };

  //   const showConfirmationDialog = () => {
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: 'Do you want to leave this screen?',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes, leave this screen',
  //       cancelButtonText: 'No, stay on this screen',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         // User confirmed, leave the screen
  //         navigation.goBack();
  //       } else {
  //         // User canceled, stay on the screen
  //       }
  //     });
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   }
  // }, [])

  const navigate = useHistory()
  return !sessionStorage.getItem("matchSession") ?
    <Redirect replace to="/selection" /> : (
      <Container className='margin-issue' style={{ textAlign: 'center', marginTop: (JSON.parse(sessionStorage.getItem("matchSession")).current > JSON.parse(sessionStorage.getItem("matchSession")).matchSize ? '0%' : "5%") }} fixed>
        <Prompt
           message={(location, action) => {
            console.log(action)
            // if (action === 'POP') {
            //   Swal.fire({
            //     title: `Are you sure you want to Leave ?`,
            //     icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#d33',
            //     cancelButtonColor: '#bbb',
            //     confirmButtonText: "Yes"
            // }).then((result) => {
            //   sessionStorage.clear()
            //   navigate.push('/selection')
            //  })
            // }
        
            return location.pathname.startsWith("/app")
              ? console.log("lol")
              : `Are you sure you want to leave the match?`
          }}
        />
        {JSON.parse(sessionStorage.getItem("matchSession")).current > JSON.parse(sessionStorage.getItem("matchSession")).matchSize ?
          <Completed match={JSON.parse(sessionStorage.getItem("matchSession"))} />
          :
          state ?
            <Quiz
              changeStatus={() => setState(!state)}
              run={selectedRun} /> :
            <RunSelection
              changeStatus={
                (run) => {
                  setSelectedRun(run)
                  setState(!state)
                }
              } />
        }

      </Container>
    )
}

export default MatchPage