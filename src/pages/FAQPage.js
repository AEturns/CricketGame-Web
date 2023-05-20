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
                <h3>How to Play MyCricQ?</h3>
            </CButton>

            <CCollapse visible={visible1}>
                <CCard className="mt-3">
                    <CCardBody>
                        <p>Interactive cricket related quiz game where the player is able to provide answers to the questions and win amazing prizes for the set period. User is able to create an alias, select different quizzes with run points. </p>
                        <p>අන්තර්ක්‍රියාකාරී ක්‍රිකට් ආශ්‍රිත ප්‍රශ්න විචාරාත්මක ක්‍රීඩාවක් වන අතර එහිදී ක්‍රීඩකයාට ප්‍රශ්නවලට පිළිතුරු සැපයීමට සහ නියමිත කාල සීමාව සඳහා පුදුමාකාර ත්‍යාග දිනා ගැනීමට හැකි වේ. පරිශීලකයාට අන්වර්ථයක් නිර්මාණය කිරීමට, ධාවන ලකුණු සමඟ විවිධ ප්‍රශ්නාවලිය තෝරා ගැනීමට හැකිය.</p>
                        <p>ஊடாடும் கிரிக்கெட் தொடர்பான வினாடி வினா விளையாட்டு, இதில் வீரர் கேள்விகளுக்கான பதில்களை வழங்க முடியும் மற்றும் குறிப்பிட்ட காலத்திற்கு அற்புதமான பரிசுகளை வெல்ல முடியும். பயனர் மாற்றுப்பெயரை உருவாக்கலாம், ரன் புள்ளிகளுடன் வெவ்வேறு வினாடி வினாக்களை தேர்ந்தெடுக்கலாம்.</p>
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
                        <p>If you want Unsubscribe from our service, you can press "unsubscribe from MyCricQ" button after login to your account. Otherwise, You can simply send and sms typing "UNREG MYCRICQ" to 87798 </p>
                    <p>ඔබට අපගේ සේවාවෙන් දායකත්වයෙන් ඉවත් වීමට අවශ්‍ය නම්, ඔබගේ ගිණුමට පිවිසීමෙන් පසු ඔබට "MyCricQ වෙතින් දායකත්වයෙන් ඉවත් වන්න" බොත්තම එබිය හැක. එසේ නොමැතිනම්, ඔබට "UNREG MYCRICQ" ලෙස ටයිප් කර 87798 ට කෙටි පණිවිඩයක් යැවිය හැක.</p>
                    <p>எங்கள் சேவையிலிருந்து நீங்கள் குழுவிலக விரும்பினால், உங்கள் கணக்கில் உள்நுழைந்த பிறகு "MyCricQ இலிருந்து குழுவிலகு" பொத்தானை அழுத்தலாம். இல்லையெனில், "UNREG MYCRICQ" என தட்டச்சு செய்து 87798 க்கு எஸ்எம்எஸ் அனுப்பலாம்.</p>
                    </CCardBody>
                </CCard>
            </CCollapse>
            
            </List>
        </Container>
    )
}

export default FAQPage