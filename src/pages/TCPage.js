import {
  CButton,
  CCard,
  CCardBody,
  CCollapse,
  CContainer,
} from "@coreui/react";
import React, { useState } from "react";
import { Container } from "@mui/system";
import { List } from "@mui/material";
import { useHistory } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
function TCPage() {
  const navigate = useHistory();
  return (
    <Container  fixed>
      <CButton
        color="danger"
        variant="outline"
        style={{ textAlign: "start", marginTop: "5%", cursor: "pointer" }}
        size="small"
        onClick={() => navigate.goBack()}
      >
        <ArrowBackIcon />
      </CButton>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
        <div className="top-heading mb-3">
          <h2
            style={{
              color: "#cf4036",
              fontWeight: "bold",
              fontSize: "2em",
              WebkitTextStroke: "0.5px #BD1307",
            }}
            className="animate__animated animate__bounceInDown"
          >
            Terms & Conditions
          </h2>
        </div>
        <List className="card-list-faq" style={{ padding: "30px" }}>
          <CCard className="mt-3">
            <CCardBody>
            <p>Service Provider - Dialog</p>
              <p>
                You hereby agree that You have read and fully understood the
                terms and conditions of the third party mobile network
                operator/s at <a href="https://dlg.dialog.lk/tc/vas">https://dlg.dialog.lk/tc/vas</a>. Your use of this
                website constitutes Your agreement to follow and be bound by
                such terms and conditions.
              </p>
              <p>
                තුන්වන පාර්ශ්වයේ ජංගම ජාල ක්‍රිකාකරු/ක්‍රියාකරුවන් සඳහා වන,
                <a href="https://dlg.dialog.lk/tc/vas">https://dlg.dialog.lk/tc/vas</a> වෙබ් අඩවියේ තිබෙන නියමයන් සහ
                කොන්දේසි ඔබ විසින් කියවා මැනවින් වටහා ගෙන ඇති බවට ඔබ මෙයින්
                එකඟවනු ලැබේ. මෙම වෙබ් අඩවිය ඔබ විසින් භාවිත කිරීම හේතුවෙන්ම මෙම
                නියමයන් සහ කොන්දේසි අනුගමනය කොට ඒවායින් බැඳී සිටින බවට වන ඔබගේ
                එකඟතාව පිළිබිඹු වන බව සලකන්න.
              </p>
              <p>
              <a href="https://dlg.dialog.lk/tc/vas">https://dlg.dialog.lk/tc/vas</a> இணையத்தளத்தில் மூன்றாம் தரப்பு
                கையடக்கத்தொலைபேசி வலைப்பின்னல் இயக்குனர்/களின் நியதிகள் மற்றும்
                நிபந்தனைகளை நீங்கள் வாசித்து முழுமையாக புரிந்து கொண்டீர்கள்
                என்பதை இத்தால் ஒப்புக்கொள்கிறீர்கள். இந்த இணையத்தளத்தை நீங்கள்
                பயன்படுத்துவதானது, அத்தகைய நியதிகள் மற்றும் நிபந்தனைகளைப்
                பின்பற்றுவதற்கும் மற்றும் அவற்றுக்கு கட்டுப்படுவதற்குமான உங்கள்
                உடன்பாட்டை உருவாக்குகிறது.
              </p>
            </CCardBody>
          </CCard>
          <CCard className="mt-3">
            <CCardBody>
              <p>Service Provider - Mobitel</p>
              <p>
                You hereby agree that You have read and fully understood the
                terms and conditions of the third party mobile network
                operator/s at <a href="https://www.mobitel.lk/mycricq">https://www.mobitel.lk/mycricq</a>. Your use of this
                website constitutes Your agreement to follow and be bound by
                such terms and conditions.
              </p>
              <p>
                තුන්වන පාර්ශ්වයේ ජංගම ජාල ක්‍රිකාකරු/ක්‍රියාකරුවන් සඳහා වන,
                <a href="https://www.mobitel.lk/mycricq">https://www.mobitel.lk/mycricq</a> වෙබ් අඩවියේ තිබෙන නියමයන් සහ
                කොන්දේසි ඔබ විසින් කියවා මැනවින් වටහා ගෙන ඇති බවට ඔබ මෙයින්
                එකඟවනු ලැබේ. මෙම වෙබ් අඩවිය ඔබ විසින් භාවිත කිරීම හේතුවෙන්ම මෙම
                නියමයන් සහ කොන්දේසි අනුගමනය කොට ඒවායින් බැඳී සිටින බවට වන ඔබගේ
                එකඟතාව පිළිබිඹු වන බව සලකන්න.
              </p>
              <p>
              <a href="https://www.mobitel.lk/mycricq">https://www.mobitel.lk/mycricq</a> இணையத்தளத்தில் மூன்றாம் தரப்பு
                கையடக்கத்தொலைபேசி வலைப்பின்னல் இயக்குனர்/களின் நியதிகள் மற்றும்
                நிபந்தனைகளை நீங்கள் வாசித்து முழுமையாக புரிந்து கொண்டீர்கள்
                என்பதை இத்தால் ஒப்புக்கொள்கிறீர்கள். இந்த இணையத்தளத்தை நீங்கள்
                பயன்படுத்துவதானது, அத்தகைய நியதிகள் மற்றும் நிபந்தனைகளைப்
                பின்பற்றுவதற்கும் மற்றும் அவற்றுக்கு கட்டுப்படுவதற்குமான உங்கள்
                உடன்பாட்டை உருவாக்குகிறது.
              </p>
            </CCardBody>
          </CCard>
          <CCard className="mt-3">
            <CCardBody>
              <p>Service Provider - Hutch</p>
              <p>
                You hereby agree that You have read and fully understood the
                terms and conditions of the third party mobile network
                operator/s at <a href="https://hutch.lk/terms-conditions">https://hutch.lk/terms-conditions</a>. Your use of this
                website constitutes Your agreement to follow and be bound by
                such terms and conditions.
              </p>
              <p>
                තුන්වන පාර්ශ්වයේ ජංගම ජාල ක්‍රිකාකරු/ක්‍රියාකරුවන් සඳහා වන,
                <a href="https://hutch.lk/terms-conditions">https://hutch.lk/terms-conditions</a> වෙබ් අඩවියේ තිබෙන නියමයන් සහ
                කොන්දේසි ඔබ විසින් කියවා මැනවින් වටහා ගෙන ඇති බවට ඔබ මෙයින්
                එකඟවනු ලැබේ. මෙම වෙබ් අඩවිය ඔබ විසින් භාවිත කිරීම හේතුවෙන්ම මෙම
                නියමයන් සහ කොන්දේසි අනුගමනය කොට ඒවායින් බැඳී සිටින බවට වන ඔබගේ
                එකඟතාව පිළිබිඹු වන බව සලකන්න.
              </p>
              <p>
              <a href="https://hutch.lk/terms-conditions">https://hutch.lk/terms-conditions</a> இணையத்தளத்தில் மூன்றாம் தரப்பு
                கையடக்கத்தொலைபேசி வலைப்பின்னல் இயக்குனர்/களின் நியதிகள் மற்றும்
                நிபந்தனைகளை நீங்கள் வாசித்து முழுமையாக புரிந்து கொண்டீர்கள்
                என்பதை இத்தால் ஒப்புக்கொள்கிறீர்கள். இந்த இணையத்தளத்தை நீங்கள்
                பயன்படுத்துவதானது, அத்தகைய நியதிகள் மற்றும் நிபந்தனைகளைப்
                பின்பற்றுவதற்கும் மற்றும் அவற்றுக்கு கட்டுப்படுவதற்குமான உங்கள்
                உடன்பாட்டை உருவாக்குகிறது.
              </p>
            </CCardBody>
          </CCard>
        </List>
      </div>
    </Container>
  );
}

export default TCPage;
