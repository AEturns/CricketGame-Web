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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router";
function FAQPage() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);

  const navigate = useHistory();
  return (
    <Container fixed>
      <CButton
        color="danger"
        variant="outline"
        style={{ textAlign: "start", marginTop: "5%", cursor: "pointer" }}
        size="small"
        onClick={() => navigate.goBack()}
      >
        <ArrowBackIcon />
      </CButton>
      <div style={{ textAlign: "center" }}>
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
            FAQ
          </h2>
        </div>
        <List className="card-list-faq" style={{ padding: "30px", }}>
          <CButton
            color="dark"
            variant="ghost"
            
            onClick={(event) => {
              event.preventDefault();
              setVisible1(!visible1);
            }}
          >
            <h3 style={{ fontWeight: "bold"}}>MyCrickQ යනු කුමක්ද?</h3>
          </CButton>

          <CCollapse visible={visible1}>
            <CCard className="mt-3">
              <CCardBody>
                <p>
                  MyCrickQ යනු ක්‍රිකට් ක්‍රීඩාවේ විවිධ කාණ්ඩයන්ට සහ ප්‍රබේදයන්ට
                  අයත් game එකක් ලෙස play කල හැකි ප්‍රශ්න ඇතුලත් Digital Online
                  Quiz Platform එකකි. මෙය ශ්‍රී ලංකාවේ ඇති සියලුම දුරකථන
                  සන්නිවේදන ආයතනවල සහයෝගයෙන් සහ සම්බන්ධතාවයෙන් යුත් අධ්‍යාපන හා
                  විනෝදාස්වාදය පදනම් කරගත් ඩිජිටල් සේවාවක් ලෙස සකසා ඇත. තෝරාගත්
                  ප්‍රශ්නාවලියෙහි විනෝදාස්වාදය නොකැඩි පවත්වා ගැනීම සඳහා සියලුම
                  සහභාගිවන්නන් / ජයග්‍රාහකයින් කාලය පදනම් කරගත් පද්ධතියක් මගින්
                  ඇගයීමට ලක් කරනු ලබන Mobile subscription ආකෘතියක් හරහා සේවාව
                  මෙහෙයවනු ලැබේ.
                </p>
              </CCardBody>
            </CCard>
          </CCollapse>
          <br />
          <CButton
            className="mt-4"
            color="dark"
            variant="ghost"
            onClick={(event) => {
              event.preventDefault();
              setVisible2(!visible2);
            }}
          >
            <h3 style={{ fontWeight: "bold"}}>මෙම ක්‍රීඩාව සිදු කරන්නේ කෙසේද?</h3>
          </CButton>

          <CCollapse visible={visible2}>
            <CCard className="mt-3">
              <CCardBody style={{ textAlign: "left" }}>
                <p>ඔබ කල යුතු වන්නේ;</p>
                <ul>
                  <li>පළමු පියවර: MyCrickQ.com වෙබ් අඩවියට පිවිසෙන්න</li>
                  <li>
                    දෙවන පියවර: ඔබ තෝරාගත් වර්ගයේ ප්‍රශ්නාවලිය play කිරීම තහවුරු
                    කිරීම සඳහා ඔබේ ජංගම දුරකථන අංකය ඇතුළත් කර, එයට ලැබෙන OTP
                    අංකය හරහා එය තහවුරු කරන්න.
                  </li>
                </ul>
              </CCardBody>
            </CCard>
          </CCollapse>

          <br />
          <CButton
            className="mt-4"
            color="dark"
            variant="ghost"
            onClick={(event) => {
              event.preventDefault();
              setVisible3(!visible3);
            }}
          >
            <h3 style={{ fontWeight: "bold"}}>සේවාවෙන් ඉවත් වන්නේ කෙසේද?</h3>
          </CButton>

          <CCollapse visible={visible3}>
            <CCard className="mt-3">
              <CCardBody style={{ textAlign: "left" }}>
                <p>ඔබ කල යුතු වන්නේ;</p>
                <ul>
                  <li> MyCrickQ.com වෙබ් අඩවිය වෙත පිවිසෙන්න.</li>
                  <li>
                    එහි ඔබ ලියාපදිංචි වූ ප්‍රශ්න වර්ගය මත click කර එවිට එන
                    unregister බොත්තම මත click කරන්න.
                  </li>
                  <li>
                    ඔබේ ගිණුම තුලට ගොස් (වම්පස ඉහල කෙලවර සඳහන් මිනිස් රූපය) ඔබ
                    ලියාපදිංචි වී ඇති සේවාවෙන් ඉවත් වීමට එහි සඳහන් button 1ක
                    (බොත්තම) click කරන්න.{" "}
                  </li>
                </ul>
              </CCardBody>
            </CCard>
          </CCollapse>

          <br />
          <CButton
            className="mt-4"
            color="dark"
            variant="ghost"
            onClick={(event) => {
              event.preventDefault();
              setVisible4(!visible4);
            }}
          >
            <h3 style={{ fontWeight: "bold"}}>MyCrickQ.com වෙත ලියාපදිංචි වීම</h3>
          </CButton>

          <CCollapse visible={visible4}>
            <CCard className="mt-3">
              <CCardBody>
                <p>
                  විවිධ ප්‍රශ්න කාණ්ඩ ඇතුලත් MyCrickQ.com හී කැමති ප්‍රශ්න
                  කාණ්ඩයක් වෙත ලියාපදිංචි වූ විට පාරිභෝගිකයාට වේලාව ගණනය කිරීමේ
                  පදනම යටතේ පිළිතුරු ලබා දීමට සිදුවන ප්‍රශ්න 10ක් සෑම දිනකම
                  ලැබෙන අතර ඒ සඳහා දිනකට රු.6ක් සහ අදාළ බදු අයවේ. ඔබට ලබාගැනීමට
                  අවශ්‍ය ලකුණු ප්‍රමාණය මුලින්ම තීරණය කර (ක්‍රිකට් ක්‍රීඩාවේ
                  ලකුණු ලැබෙන ආකාරයට), ප්‍රශ්නයට මුහුණ දීම කල හැකි අතර, තෝරාගත්
                  ලකුණු ප්‍රමාණයට අනුව ප්‍රශ්ණයේ දුෂ්කරතාවය සහ පහසුබව තීරණය වේ.
                  (උදාහරණ : ලකුණු 6ක ප්‍රශ්ණයක් වඩා දුෂ්කර වන අතර ලකුණු 1ක
                  ප්‍රශ්ණයක් වඩා පහසු වේ.)
                </p>
              </CCardBody>
            </CCard>
          </CCollapse>

          <br />
          <CButton
            className="mt-4"
            color="dark"
            variant="ghost"
            onClick={(event) => {
              event.preventDefault();
              setVisible5(!visible5);
            }}
          >
            <h3 style={{ fontWeight: "bold"}}>ජයග්‍රාහකයෙකු තෝරා ගනු ලබන්නේ කෙසේද? </h3>
          </CButton>

          <CCollapse visible={visible5}>
            <CCard className="mt-3">
              <CCardBody style={{ textAlign: "left" }}>
                <p>ඔබ කල යුතු වන්නේ;</p>
                <ul>
                  <li>
                    MyCrickQ.com තරඟයේදී අවම කාල රාමුවක් තුළ ලබා දුන් වැඩිම
                    ලකුණු ප්‍රමාණය අයත් නිවැරදි පිළිතුරු ගණන අනුව ජයග්‍රාහකයෙකු
                    තෝරා ගනු ලැබේ.{" "}
                  </li>
                  <li>
                    තෝරාගන්නා ලකුණු ප්‍රමාණයට අනුව පිළිතුරු ලබාදීමට ලැබෙන කාලය
                    වෙනස්වේ. අඩු ලකුණු සදහා වැඩි කාලයක්ද, වැඩි ලකුණු සදහා අඩු
                    කාලයක්ද ලැබේ.
                  </li>
                  <li>
                    තරඟයේදී වැඩිම ලකුණු ප්‍රමාණයක් රැස් කරගන්නා ආකාරයට
                    ජයග්‍රාහකයා තේරී පත් වේ
                  </li>
                  <li>
                    කාර්යාලීය වැඩකරන තෙදිනක් තුල ජයග්‍රාහකයාව දුරකතනයෙන් සම්බන්ද
                    කර ගනු ලැබේ.
                  </li>
                </ul>
              </CCardBody>
            </CCard>
          </CCollapse>

          <br />
          <CButton
            className="mt-4"
            color="dark"
            variant="ghost"
            onClick={(event) => {
              event.preventDefault();
              setVisible6(!visible6);
            }}
          >
            <h3 style={{ fontWeight: "bold"}}>MyCrickQ.com පිළිබඳ වැඩිදුර තොරතුරු</h3>
          </CButton>

          <CCollapse visible={visible6}>
            <CCard className="mt-3">
              <CCardBody>
                <p>
                  MyCrickQ.com විසින් එහි ඇති සෑම ප්‍රශ්න කාණ්ඩයකටම අදාළව මුදල්
                  තෑගි,තෑගි වවුචර, ජංගම දුරකථන, Laptop පරිගණක සහ තවත් වටිනා
                  විදුලි උපකරණ ඇතුළුව ජයග්‍රාහී ත්‍යාග පිරිනැමේ.
                </p>
              </CCardBody>
            </CCard>
          </CCollapse>
        </List>
      </div>
    </Container>
  );
}

export default FAQPage;
