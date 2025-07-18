<script setup>
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })
</script>
<template>
  <div class="terms-policy q-py-lg" :class="$q.screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
    <template v-if="locale === 'en'">
      <div class="text-h4 q-pb-lg">Privacy Policy</div>
      <p class="text-weight-bold">('tradurs.com' hereinafter referred to as 'Tradurs') will formulate and
        publish the
        following
        personal
        information processing policy in order to protect the personal information of the information subject in
        accordance with Article 30 of the 「Personal Information Protection Act.」</p>

      <div class="text-h6">Article 1 (Purpose of processing personal information)</div>
      <p>The purpose of the personal information file registered and published by Seraome under Article 32 of the
        Personal
        Information Protection Act is as follows:</p>
      <ul>
        <li>Purpose of processing personal information: sending all emails, providing necessary information in case of
          password loss, handling complaints, etc.</li>
        <li>Collection Method: Home Page</li>
        <li>Holding grounds: Article 15 of the Personal Information Protection Act (Consent of the information subject)
        </li>
        <li>Retention Period: Semi-permanent</li>
      </ul>
      <div class="text-h6">Article 2 (Provision of Personal Information by Third Parties)</div>
      <ul>
        <li>① Tradurs processes personal information only to the extent specified in Article 1 (Purpose of processing
          personal information) and provides personal information to third parties only if it falls under Articles 17
          and 18 of the Personal Information Protection Act, such as consent of the information subject and special
          provisions of the law.</li>
        <li>② Tradurs provides the following personal information to third parties.
          <ul>
            <li>Person who provides personal information: Tradurs</li>
            <li>Purpose of use of recipient's personal information: e-mail, password, access log, cookie, IP address
            </li>
            <li>Hold and use period of donor: 5 years</li>
          </ul>
        </li>
      </ul>
      <div class="text-h6">Article 4 (Rights and obligations of information entities and legal agents and their
        exercise methods)</div>
      <ul>
        <li>① The information subject may exercise the right to view, correct, delete, and suspend processing of
          personal information to Tradurs at any time.</li>
        <li>② The exercise pursuant to paragraph 1 may be made to Tradurs in accordance with paragraph 1 of Article
          41 of the Enforcement Order of the Personal Information Protection Act by means of documents, e-mail, and fax,
          and Tradurs will take action without delay.</li>
        <li>
          ③ The exercise of the rights pursuant to paragraph 1 can be done through a legal representative of the
          information subject or through a person entrusted to it.In this case, “Notification on the processing method
          of personal information (No. 2020-7)” You need to submit a power of attorney pursuant to Attachment No. 11.
        </li>
        <li>④ Requests for access to personal information and suspension of processing may be restricted based on
          Article 35(4) and Article 37(2) of the Personal Information Protection Act.
        </li>
        <li>⑤ The request for the correction and deletion of personal information cannot be requested if the personal
          information is specified by other laws and regulations.
        </li>
        <li>⑥ Tradurs will check whether the person who requested access based on the rights of the information
          subject, correction/deletion request, or inspection at the time of suspension of processing is the person
          himself/herself or an authorized representative.
        </li>
      </ul>
      <div class="text-h6">Article 5 (Preparation of items of personal information to be processed)</div>
      <p>SraSome handles the following personal information items:</p>
      <ul>
        <li>Required: Email, Password, Access Log, Cookie, IP Address</li>
      </ul>
      <div class="text-h6">Article 6 (Disposal of personal information)</div>
      <ul>
        <li>① Tradurs shall destroy personal information without delay when the personal information is no
          longer needed,
          such as the expiration of the retention period or the achievement of the processing purpose.</li>
        <li>② When personal information must be kept in accordance with other laws and regulations even after
          the period of
          retention of personal information has passed or the purpose of processing has been achieved, the
          personal
          information shall be transferred to a separate database (DB) or stored separately.
          <ul>
            <li>1. Legal basis</li>
            <li>2. Personal information items to be saved: account information, transaction date</li>
          </ul>
        </li>
        <li>③ Procedures and methods for destroying personal information are as follows.1. Disposal procedure
          SerSome
          selects personal information for which the reason for destruction has occurred and destroys the
          personal
          information with the approval of the person in charge of personal information protection.</li>
      </ul>
      <div class="text-h6">Article 7 (Measures to ensure the security of personal information)</div>
      <p>Tradurs has taken the following steps to ensure the security of your personal information:</p>
      <ul>
        <li>
          conduct independent audits on a regular basis (once a quarter).</li>
        <li>
          designate personnel handling personal information, minimize them, and manage personal information.</li>
        <li>
          internal management plan for secure processing of personal information.</li>
        <li>
          hacking or computer viruses, Tradurs establishes a security program, periodically updates and inspects
          systems in areas where external access is restricted, and physically monitors and blocks them.</li>
        <li>
          user can know, and important data is encrypted and transferred, and another security function is used, such as
          using a file lock function.</li>
        <li>
          personal information processing system for at least 6 months and use security features to prevent forgery,
          theft, and loss.</li>
        <li>
          information by granting, changing, and deleting access to database systems that process personal information.
        </li>
        <li>
          storage media, etc. in a secure location with locking equipment.</li>
        <li>
          information is stored is established, and on-site control procedures are established and operated.</li>
      </ul>
      <div class="text-h6">Article 8 (Matters concerning the installation, operation and rejection of automatic
        personal information collectors)
      </div>
      <ul>
        <li>① Tradurs uses ‘cookies’ to store and load usage information from time to time in order to
          provide
          customized services to users.</li>
        <li>② Cookies are a small amount of information sent to the user's computer browser by the server (http)
          used to operate the website, and may be stored on the user's computer's hard disk.
          <ol>
            <li>A. Purpose of Cookies: It is used to optimize information for users by identifying their visit to each
              service and
              website, how they use it, popular search terms, and whether or not they have access to security.</li>
            <li>B. Installation, operation and rejection of cookies: You can refuse to save cookies by going to Tools
              &gt; Internet Options &gt; Personal Information Menu at the top of the web browser.</li>
            <li>C. If you refuse to save cookies, you may find it difficult to use customized services.</li>
          </ol>
        </li>
      </ul>
      <div class="text-h6">Article 11 (Infringement Relief Method)</div>
      <p>
        In order to receive relief for personal information infringement, the information subject can apply
        for dispute resolution and consultation with the Personal Information Dispute Coordination Committee or the
        Personal Information Infringement Reporting Center of the Korea Internet Agency. If you would like to report or
        consult with the following organizations about other personal information violations.</p>
      <ul>
        <li>1. Personal Information Dispute Mediation Committee: (no code) 1833-6972 (www.kopico.go.kr)</li>
        <li> 2. Personal Information Infringement Report Center: (no code) 118 (privacy.kisa.or.kr)</li>
        <li> 3. Supreme Public Prosecutor's Office: (no code) 1301 (www.spo.go.kr)</li>
        <li> 4. National Police Agency: (no code) 182 (cyberbureau.police.go.kr)</li>
      </ul>
      <p>In response to the requests under Articles 35 「Access to Personal Information」, 36 (Correction/Deletion of
        Personal Information) and 37 (Suspension of Personal Information Processing) of the Personal Information
        Protection Law, a person who has been infringed on by the head of a public institution may file an
        administrative trial.</p>
      <p>※ Please refer to the website of the Central Administrative Inquiry Commission (www.simpan.go.kr) for
        details on
        administrative Inquiry.</p>
      <div class="text-h6">Article 12 (Changes to the personal information processing policy)</div>
      <p>① This personal information handling policy will be applied from June 10, 2023.</p>
    </template>
    <template v-else>
      <div class="text-h4 q-pb-lg">개인정보 처리방침</div>
      <p class="text-weight-bold">('tradurs.com'이하 'Tradurs') 은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한
        고충을
        신속하고 원활하게 처리할 수
        있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
      <div class="text-h6">제1조(개인정보의 처리목적)</div>
      <p>Seraome이 개인정보 보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리목적은 다음과 같습니다.</p>
      <ul>
        <li>개인정보의 처리목적 : 전체메일발송, 비밀번호 분실시 필요한 정보제공 및 민원처리 등</li>
        <li>수집방법 : 홈페이지</li>
        <li>보유근거 : 개인정보보호법제15조 (정보주체의 동의)</li>
        <li>보유기간 : 준영구</li>
      </ul>
      <div class="text-h6">제2조(개인정보의 제3자 제공)</div>
      <ul>
        <li>① Tradurs는 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에
          해당하는 경우에만 개인정보를 제3자에게 제공합니다.</li>
        <li>② Tradurs는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
          <ul>
            <li>개인정보를 제공받는 자 : Tradurs</li>
            <li>제공받는 자의 개인정보 이용목적 : 이메일, 비밀번호, 접속 로그, 쿠키, 접속 IP 정보</li>
            <li>제공받는 자의 보유.이용기간: 5년</li>
          </ul>
        </li>
      </ul>
      <div class="text-h6">제4조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)</div>
      <ul>
        <li>① 정보주체는 Tradurs에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
        <li>② 제1항에 따른 권리 행사는 Tradurs에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며
          Tradurs는 이에 대해 지체 없이 조치하겠습니다.</li>
        <li>③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한
          고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</li>
        <li>④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</li>
        <li>⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</li>
        <li>⑥ Tradurs는(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를
          확인합니다.</li>
      </ul>
      <div class="text-h6">제5조(처리하는 개인정보의 항목 작성)</div>
      <p>Tradurs는 다음의 개인정보 항목을 처리하고 있습니다.</p>
      <ul>
        <li>필수항목 : 이메일, 비밀번호, 접속 로그, 쿠키, 접속 IP 정보</li>
      </ul>
      <div class="text-h6">제6조(개인정보의 파기)</div>
      <ul>
        <li>① Tradurs는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</li>
        <li>② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를
          별도의
          데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
          <ol>
            <li>1. 법령 근거</li>
            <li>2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜</li>
          </ol>
        </li>
        <li>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.1. 파기절차 Tradurs는 파기 사유가 발생한 개인정보를 선정하고, 의 개인정보 보호책임자의 승인을 받아 개인정보를
          파기합니다.
        </li>
      </ul>
      <div class="text-h6">제7조(개인정보의 안전성 확보 조치)</div>
      <p>Tradurs는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
      <ul>
        <li>1. 정기적인 자체 감사 실시 : 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.</li>
        <li>2. 개인정보 취급 직원의 최소화 및 교육 : 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</li>
        <li>3. 내부관리계획의 수립 및 시행 : 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</li>
        <li>4. 해킹 등에 대비한 기술적 대책 : Tradurs는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
          갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</li>
        <li>5. 개인정보의 암호화 : 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나
          파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</li>
        <li>6. 접속기록의 보관 및 위변조 방지 : 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속
          기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.</li>
        <li>7. 개인정보에 대한 접근 제한 : 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고
          있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</li>
        <li>8. 문서보안을 위한 잠금장치 사용 : 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</li>
        <li>9. 비인가자에 대한 출입 통제 : 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</li>
      </ul>
      <div class="text-h6">제8조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)</div>
      <ul>
        <li>① Tradurs는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
        </li>
        <li>② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도
          합니다.
          <ol>
            <li>가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된
              정보 제공을 위해 사용됩니다.</li>
            <li>나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
            </li>
            <li>다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
          </ol>
        </li>
      </ul>
      <div class="text-h6">제11조(권익침해 구제방법)</div>
      <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에
        기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</p>
      <ul>
        <li>1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
        <li>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
        <li>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
        <li>4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)</li>
      </ul>
      <p>「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분
        또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
      <p>※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.</p>
      <div class="text-h6">제12조(개인정보 처리방침 변경)</div>
      <p>
        ① 이 개인정보처리방침은 2023년 6월 10부터 적용됩니다.</p>
    </template>
  </div>
</template>
<style scoped>
.terms-policy {
  user-select: none;
}

.terms-policy p {
  margin: 1em 0 0 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1vw;
  word-break: break-all;
}

li {
  margin: 0.4em 0 0 0;
}

.text-h6 {
  padding: 1.4em 0 0 0;
  font-weight: bold;
}

.text-h4 {
  font-weight: bold;
}
</style>