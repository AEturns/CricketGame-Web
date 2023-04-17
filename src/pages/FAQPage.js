import { CButton, CCard, CCardBody, CCollapse, CContainer } from '@coreui/react'
import React, { useState } from 'react'
import { Container } from '@mui/system'
import { List } from '@mui/material'
function FAQPage() {
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    return (
        <Container style={{ textAlign: 'center', marginTop: '5%' }} fixed>
            <div className='top-heading mb-3'>
                <h2 style={{ color: '#cf4036', fontWeight: 'bold', fontSize: '2em', WebkitTextStroke: "0.5px #BD1307" }} className="animate__animated animate__bounceInDown">FAQ</h2>

            </div>
            <List className='card-list-faq' style={{padding: '30px'}}>
            <CButton color="light" variant="ghost" onClick={(event) => {
                event.preventDefault()
                setVisible1(!visible1)
            }}>
                <h3>How to Play the Game?</h3>
            </CButton>

            <CCollapse visible={visible1}>
                <CCard className="mt-3">
                    <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                        sapiente ea proident.
                    </CCardBody>
                </CCard>
            </CCollapse>
            <br />
            <CButton className='mt-4' color="light" variant="ghost" onClick={(event) => {
                event.preventDefault()
                setVisible2(!visible2)
            }}>
                <h3>How to Unsubscribe? </h3>
            </CButton>

            <CCollapse visible={visible2}>
                <CCard className="mt-3">
                    <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                        sapiente ea proident.
                    </CCardBody>
                </CCard>
            </CCollapse>
            
            </List>
        </Container>
    )
}

export default FAQPage