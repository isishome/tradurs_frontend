<script setup>
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })
</script>
<template>
  <div class="terms-policy q-py-lg" :class="$q.screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
    <template v-if="locale === 'en'">
      <div class="text-h4">Terms of Use</div>
      <div class="text-h6">Welcome to Tradurs!</div>
      <div class="text-h6">Article 1 (Purpose)</div>
      <p>This agreement is intended to provide for the terms and procedures of use of the online service provided by
        Tradurs on its website (tradurs.com).</p>

      <div class="text-h6">Article 2 (Definition)</div>
      <p>The definitions of the terms used in this Agreement are as follows:</p>
      <ol>
        <li>Users: Persons who receive services provided by Tradurs in accordance with these Terms and Conditions.</li>
        <li>Contract: A contract between Tradurs and the user regarding the use of the service.</li>
        <li>Registration: Complete the service contract by filling out the information in the application form provided
          by Tradurs and agreeing to these terms.</li>
        <li>A person who has provided personal information necessary for membership registration and has registered
          as a member on the website.</li>
        <li>Email: An email format selected by the user and approved by Tradurs for membership identification and use
          of the service.</li>
        <li>Password: A combination of long letters, numbers, and special characters set by the user to protect members'
          information</li>
        <li>Withdrawal of members: Tradurs or a member expresses his/her intention to terminate the contract after
          using the service.</li>
        <li>Bulletin: Title, content, and comments to be registered on the bulletin board</li>
      </ol>
      <div class="text-h6">Article 3 (Effect and Change of Terms and Conditions)</div>
      <ul>
        <li>① Terms and conditions become effective by posting them on the service screen such as a notice board or by
          other means.</li>
        <li>② Tradurs may change the contents of the terms and conditions within the scope of laws and other
          relevant laws if necessary, and will inform you of the revised terms and conditions, the date of application,
          and the reason for the revision as described in the preceding paragraph. Customer agrees to the changes in
          these Terms and Conditions if Customer does not refuse to use the Service after the 7th day of notice of the
          change.</li>
        <li>③ If the members do not agree to the terms and conditions, they may suspend the use of the service and
          cancel their membership registration. If they continue to use the service without any objection, they will
          agree to the terms and conditions and become effective in the same way as above.</li>
      </ul>
      <div class="text-h6">Article 4 (Provisions applied mutatis mutandis)</div>
      <p>Matters not specified in this agreement shall be governed by the provisions of the Information and
        Communications Network Promotion and Information Protection Act, the Telecommunications Business Act, and other
        relevant laws and regulations.</p>

      <div class="text-h6">Article 5 (Conclusion of a contract of use)</div>
      <p>"A user agreement will be established if Tradurs accepts the user's application in accordance with certain
        procedures, such as clicking the ""Accept Terms and Conditions"" button."</p>

      <div class="text-h6">Article 6 (Application for use)</div>
      <ul>
        <li>
          ① To apply for the service, record your personal information in the registration application form requested by
          the user on the service membership information screen.</li>
        <li>
          ② Fill out all the required items in the application form and agree to the terms and conditions below to
          complete the application.
          <ol>
            <li>e-mail</li>
            <li>password</li>
            <li>BattleTag™</li>
            <li>Other items deemed necessary by Tradurs</li>
          </ol>
        </li>
      </ul>
      <div class="text-h6">Article 7 (Acceptance of application for use)</div>
      <ul>
        <li>① Tradurs will accept the application for service unless there are special circumstances when the user
          applies for the service by filling out the required items in the application form.</li>
        <li>② If the following items apply, the user may not consent to use it.
          <ol>
            <li>Cases where an application is made under another person's name or false information, </li>
            <li> not under the
              person's own information Application for the purpose of obstructing social order or public order If you
              wish to use the service for illegal purposes,
            </li>
            <li>such as criminal acts or unwanted advertising. When a user who is restricted from using the bulletin
              board violates the law,</li>
            <li> terms and conditions, and the rules of use of the bulletin board applies.</li>
          </ol>
        </li>
        <li>③ Tradurs may withhold consent if the following matters apply:
          <ol>
            <li>Tradurs facilities or technical reasons
              make it difficult to accept the service.</li>
            <li> If a user with a history of cancelling the contract within the last
              30 days applies,</li>
            <li> Tradurs may withdraw its acceptance of use immediately if any reason is found under each item of
              Paragraph 2 of this Article after the completion of the usage contract procedures.</li>
          </ol>
        </li>
      </ul>
      <div class="text-h6">Article 8 (Change of contract matters)</div>
      <ul>
        <li>① If there is a change in the matters written in the application, the member must correct the changes
          immediately, and the member is responsible for the problems caused by the failure to do so.</li>
        <li>② You cannot change the information specific to the members, such as email address or alias.</li>
        <li>③ If the membership information provided corresponds to the following items, changes or service usage may
          be restricted or suspended by the request of the members or ex officio of the service.
          <ol>
            <li>Same or similar name of Tradurs service or operator, administrator, etc.</li>
            <li>Cases of disgust to others or contrary to public order and morality</li>
            <li>Cases where there is a risk of infringement on the rights of others</li>
            <li>When there are other reasonable grounds</li>
          </ol>
        </li>
      </ul>
      <div class="text-h6">Article 9 (Use of services)</div>
      <ul>
        <li>① Except for some special purpose bulletin boards, most bulletin boards do not have any additional
          restrictions on access to bulletin boards even if they are not registered as members.
        </li>
        <li>② In principle, the service hours should be 24 hours a day, 7 days a year. However, you may restrict or
          discontinue the use of the Services if:
          <ol>
            <li>Cases unavoidable due to inspection, maintenance or construction of service facilities</li>
            <li>In the event of a national emergency, failure of service facilities, or congestion of service usage,
              service utilization is hindered.</li>
            <li>Cases where it is necessary to restrict some services by order of the national government or relevant
              organizations</li>
            <li>In the event that it is impossible to continue using the service in the course of business or technology
              due to other serious reasons, or the company determines that restrictions or suspension of the service are
              inevitable in the course of operation.</li>
          </ol>
        </li>
        <li>③ In principle, Tradurs shall notify you in advance of the reason and duration of the restriction or
          suspension
          of the use of the service in accordance with the provisions of the preceding paragraph. However, this does not
          apply to situations that cannot be anticipated or controlled by the company.
        </li>
        <li>④ Tradurs may establish rules of use to a reasonable extent depending on the purpose and use of the
          service,
          and
          members must use the service in compliance with those rules.
        </li>
        <li>⑤ Tradurs can limit some services by membership registration date, age, activity history, and usage
          restriction
          request. In that case, we will inform the bulletin board about the standards and restrictions so that users
          can
          easily understand them.
        </li>
      </ul>
      <div class="text-h6">Article 10 (Restriction and suspension of service use)</div>
      <ul>
        <li> ① Tradurs limits the memory space, message size, and number of days of storage for efficient service
          operation.</li>
        <li>② Tradurs can convert or destroy dormant accounts in accordance with relevant laws and regulations for
          accounts
          that do not have a connection history for a certain period of time.</li>
        <li>③ Tradurs may suspend, move, or delete all contents posted or transmitted in the service without prior
          notice, and may limit or permanently cancel the service qualification of the member if necessary.
          <ol>
            <li>Cases in which personal attacks, contempt, slander, bad language, slanderous plot, dissemination of
              false
              information, or defamation against members or third parties are included</li>
            <li>When it is confirmed that the purpose is intentionally deceiving or fraudulently profitable, business or
              other
              personal gain.</li>
            <li>If you force your religious beliefs or despise other people's religions,</li>
            <li>Cases in which the contents are in violation of public order</li>
            <li>Cases where the content is deemed to be linked to a criminal act</li>
            <li>Cases of infringement of copyright or portrait rights of members or third parties</li>
            <li>Cases where computer virus programs, etc., that cause malfunction of information communication
              facilities or destruction of information, etc. are distributed</li>
            <li>Stocks, excessive use of unnecessary special characters, repeated pasting of notices, etc., preventing
              other users from using them.</li>
            <li>Cases where the content of discrimination against a particular group causes a significant sense of
              humiliation or disadvantage to the group or its members.</li>
            <li>Any other violation of relevant laws and regulations or violation of the rules of use for the purpose of
              each bulletin board established by Tradurs.</li>
          </ol>
        </li>
        <li>④ Tradurs may take temporary measures such as deleting a notice or blocking a notice when a member receives
          a request to suspend the notice based on the violation of the law of another user or a third party.</li>
        <li>⑤ Tradurs may suspend the posting of a notice posted on the service without the request to suspend the
          posting of the notice set forth in the preceding paragraph if it finds that the notice infringes on a third
          party's rights, such as privacy or defamation.</li>
      </ul>
      <div class="text-h6">Article 11 (Ownership of rights and exploitation of works)</div>
      <ul>
        <li>① The copyright of the notice posted in the service belongs to the author of the notice.</li>
        <li>② To the extent that it falls under the following items, Tradurs can use the notice registered by the
          members.
          <ol>
            <li>Reproduce, forward, display, distribute, and change, modify or move the title and content of the notice
              within the Service.</li>
            <li>You can modify the bulletin, change the position of the bulletin board, or delete it if it does not fit
              the purpose of each bulletin board or violates the rules of use.</li>
            <li>The contents of the notice may be blocked for a certain period of time due to reports from other
              members.</li>
            <li>Members can use functions such as scrap and use the title and link of the bulletin board.</li>
            <li>In order to distribute all emails, newsletters, etc., we may distribute some of the images, titles, and
              content created by our members by e-mail.</li>
            <li>We can provide necessary information such as title and content of the notice, e-mail of the notice
              holder, nickname, etc. to related affiliated companies for improved service such as search. However, in
              this case, the information provided will not be used for any purpose other than the designated one, and
              the personal information of the members such as name and e-mail will not provided.</li>
          </ol>
        </li>
        <li>③ Tradurs will obtain the consent of the members through memo, e-mail, and re-agreement of the terms and
          conditions when using the notice other than paragraph 2.</li>
        <li>④ In case of withdrawal or loss of membership, scrap, memo, address book, etc. recorded in the email will be
          automatically deleted within 30 days of withdrawal. However, since it does not automatically delete notices
          posted
          on public bulletin boards, re-posted, or duplicated notices, and those provided in conjunction with other
          people's
          notices, please delete them yourself before withdrawing.</li>
      </ul>
      <div class="text-h6">Article 12 (Duties of Tradurs)</div>
      <ul>
        <li>① Tradurs will do its best to ensure a sustainable and stable service in compliance with relevant laws and
          regulations and the provisions of these Terms and Conditions.</li>
        <li>② Tradurs protects its membership information and publicly announces and complies with its privacy policy.
        </li>
        <li>③ Tradurs does not divulge or distribute the identity information of members who know about the provision
          of the service to third parties without the consent of the person. However, this shall not apply to cases
          where there is a purpose of investigation into the crime or when there is a request for other procedures
          stipulated in relevant laws and regulations, such as the Telecommunications Basic Act.</li>
        <li>
          ④ Tradurs does not provide commercial e-mail and SMS transmission services that the members do not
          agree to receive.</li>
      </ul>
      <div class="text-h6">Article 13 (Responsibility of members and users)</div>
      <ul>
        <li>
          ① Members are responsible for managing personal information such as their own login passwords.</li>
        <li>② The member who created the notice has all the rights and responsibilities for the notice, etc. created by
          the member.</li>
        <li>③ Information obtained through the service cannot be collected, duplicated, or distributed without the
          consent of the information right holder.</li>
        <li>④ Users shall not use the service to hack, distribute illegal materials, or otherwise commit illegal acts.
          The users shall be responsible for the consequences and losses of business activities and legal actions taken
          by relevant organizations.</li>
        <li>⑤ Members must be familiar with and comply with the rules and regulations of use established by Tradurs.
        </li>
      </ul>
      <div class="text-h6">Article 14 (Termination of contract and restriction on use)</div>
      <ul>
        <li>① When a member wants to cancel a contract, he/she must apply for cancellation via the Internet. However,
          you can cancel the usage contract if the relevant organization asks you to do so.</li>
        <li>② Membership information will be automatically deleted 30 days after withdrawal, and re-registration will be
          restricted during this period.</li>
        <li>③ Memos and scrap contents linked to the ID will be deleted upon withdrawal from the membership, but not
          deleted from the public bulletin board. If you wish to delete it, please delete it yourself and withdraw from
          the membership.</li>
        <li>④ If you withdraw from the membership due to violation of the site usage rules or terms and conditions, you
          cannot re-register. If disciplinary action is confirmed after re-registration, you may be restricted from
          using the website or you may inherit your previous membership history.
        </li>
      </ul>
      <div class="text-h6">Article 15 (No transfer)</div>
      <p>Members cannot assign or give their rights to use the service or any other status under the contract of use to
        another person, and they cannot use it as security.</p>
      <div class="text-h6">Article 16 (Damages)</div>
      <p>Tradurs shall not be liable for any damage to its Members in connection with the services provided free of
        charge, unless such damage is due to the intention or gross negligence of Tradurs.</p>
      <div class="text-h6">Article 17 (Disclaimer)</div>
      <ul>
        <li>① Tradurs shall be relieved of its responsibility for the provision of services in the event of a natural
          disaster, war, or similar acts of God.</li>
        <li>② Tradurs is exempt from liability for damages caused by unavoidable reasons such as repair, replacement,
          periodic inspection, and construction of service equipment.</li>
        <li>③ Tradurs shall not be responsible for any disability of the use of the service due to the reason of the
          member's liability.</li>
        <li>④ Tradurs shall not be responsible for any damages caused by the profits or materials that the members
          expect from using the service.</li>
        <li>⑤ Tradurs is not responsible for the information, materials, and the reliability and accuracy of the
          information you post on the service.</li>
      </ul>
      <div class="text-h6">Article 18 (Court with jurisdiction)</div>
      <p>If a lawsuit is filed regarding a dispute arising from the use of the service, the court that has jurisdiction
        over the location of this company shall be the exclusive jurisdiction.</p>
      <div class="text-h6">supplementary provisions</div>
      <p>(Date of Enforcement) These Terms and Conditions will take effect as of June 10, 2023.</p>
    </template>
    <template v-else>
      <div class="text-h4">이용 약관</div>
      <div class="text-h6">Tradurs에 오신 것을 환영합니다!</div>
      <div class="text-h6">제1조 (목적)</div>
      <p> 이 약관은 Tradurs이 홈페이지(tradurs.com)에서 제공하는 온라인 서비스(이하 "서비스"라 한다)의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
      </p>
      <div class="text-h6">제2조(정의)</div>
      <p>이 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다. </p>
      <ol>
        <li>이용자 : 본 약관에 따라 Tradurs이 제공하는 서비스를 받는 자</li>
        <li>이용계약 : 서비스 이용과 관련하여 Tradurs과 이용자간에 체결하는 계약</li>
        <li>가입 : Tradurs이 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위</li>
        <li>회원 : 회원가입에 필요한 개인정보를 제공하여 사이트에 회원 등록을 한 자</li>
        <li>이메일 : 회원 식별과 회원의 서비스 이용을 위하여 이용자가 선정하고 Tradurs이 승인하는 이메일형식</li>
        <li>비밀번호 : 회원의 정보 보호를 위해 이용자 자신이 설정한 영대소문자와 숫자, 특수문자의 조합</li>
        <li>회원탈퇴 : Tradurs 또는 회원이 서비스 이용 이후 그 이용계약을 종료시키는 의사표시</li>
        <li>게시물 : 게시판에 등록하는 제목, 내용 및 댓글</li>
      </ol>
      <div class="text-h6">제3조 (약관의 효력과 변경)</div>
      <ul>
        <li>① 약관은 공지 게시판 등 서비스 화면에 게시하거나 또는 기타의 방법으로 공지함으로써 효력이 발생됩니다.</li>
        <li>② Tradurs는 필요한 경우 법률 기타 관련 법령의 범위내에서 약관의 내용을 변경할 수 있으며, 개정약관 및 적용일자와 개정사유를 전항의 방법으로 공지합니다. 이용자는 변경된 약관의
          공지 7일 이후에도 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.</li>
        <li>③ 회원은 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 본인의 회원등록을 취소할 수 있으며, 이의 없이 계속 사용하는 경우에는 약관 변경에 동의한 것으로 간주되고 전항과 같은
          방법으로 효력이 발생합니다.</li>
      </ul>
      <div class="text-h6">제4조 (준용규정)</div>
      <p>이 약관에 명시되지 않은 사항은 정보통신망이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 및 기타 관련법령의
        규정에 따릅니다.</p>
      <div class="text-h6">제5조 (이용계약의 성립)</div>
      <p> 이용계약은 “약관 내용에 동의함" 버튼을 클릭하는 등 Tradurs이 정한 일정한 절차에 따른 이용자의 이용신청에 대하여 Tradurs이 승낙을 하면 성립됩니다. </p>
      <div class="text-h6">제6조 (이용신청)</div>
      <ul>
        <li>① 이용신청은 서비스의 회원정보 화면에서 이용자가 Tradurs에서 요구하는 가입신청서 양식에 개인의 신상정보를 기록하여 신청합니다.</li>
        <li>② 가입신청서 양식 중 아래 각호에 해당하는 필수항목을 모두 기입하고 약관에 동의해야만 이용신청이 완료됩니다.</li>
        <ol>
          <li>이메일</li>
          <li>패스워드</li>
          <li>BattleTag™</li>
          <li>기타 Tradurs이 필요하다고 인정하는 사항 </li>
        </ol>
      </ul>
      <div class="text-h6">제7조 (이용신청의 승낙)</div>
      <ul>
        <li>① Tradurs는 이용자가 신청서의 필수 항목을 정확히 기재하여 이용신청을 하였을 경우에 특별한 사정이 없는 한 서비스 이용신청을 승낙합니다.</li>
        <li>② 다음 각 호에 해당하는 경우에는 이용승낙을 하지 않을 수 있습니다.</li>
        <ol>
          <li>본인의 정보가 아닌 다른 사람의 명의나 허위정보로 신청한 경우</li>
          <li>사회의 안녕 질서 또는 미풍양속을 저해할 목적으로 신청한 경우</li>
          <li>범죄행위, 스팸광고 등 부정한 목적으로 서비스를 이용하고자 하는 경우</li>
          <li>법률, 약관 및 각 게시판의 이용규칙을 위반하여 이용자격이 제한된 이용자가 신청한 경우</li>
        </ol>
        <li>③ Tradurs는 다음 사항에 해당하는 경우 승낙을 보류할 수 있습니다.</li>
        <ol>
          <li>Tradurs의 설비나 기술상, 운영상의 이유로 서비스 승낙이 곤란한 경우</li>
          <li>최근 30일 이내에 이용계약을 해지한 이력이 있는 이용자가 신청한 경우</li>
        </ol>
        <li>④ Tradurs는 이용계약 절차 완료 이후 본조 제2항 각 호에 따른 사유가 발견된 경우 즉시 이용승낙을 철회할 수 있습니다.</li>
      </ul>
      <div class="text-h6">제8조 (계약사항의 변경)</div>
      <ul>
        <li>① 회원은 이용신청시 기재한 사항이 변경 되었을 경우에는 즉시 변경사항을 정정하여야 하며, 수정하지 아니하여 발생하는 문제의 책임은 회원에게 있습니다.</li>
        <li>② 이메일, 별칭등 회원의 고유한 정보는 변경할 수 없습니다.</li>
        <li>③ 기재된 회원정보가 다음 각 호에 해당하는 경우 회원의 요청 또는 Tradurs의 직권으로 변경 또는 서비스의 이용을 제한하거나 정지할 수 있습니다.</li>
        <ol>
          <li>Tradurs의 서비스 또는 운영자, 관리자 등의 명칭과 동일하거나 유사하여 오인의 우려가 있는 경우</li>
          <li>타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우</li>
          <li>타인의 권리를 침해할 우려가 있는 경우</li>
          <li>기타 합리적인 사유가 있는 경우</li>
        </ol>
      </ul>
      <div class="text-h6">제9조 (서비스 이용)</div>
      <ul>
        <li>① 목적상 특수한 일부 게시판을 제외하고, 대부분의 게시판은 회원 가입을 하지 않아도 기본적으로 게시물을 열람하는데 별도의 제한을 두지 않습니다.</li>
        <li>② 서비스의 이용시간은 연중무휴, 24시간으로 함을 원칙으로 합니다. 단, 다음 각 호에 해당하는 경우 서비스 이용을 제한하거나 중지할 수 있습니다.
          <ol>
            <li>서비스 설비의 점검 및 유지보수 또는 공사로 인하여 부득이한 경우</li>
            <li>국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 경우</li>
            <li>국가 또는 관계기관의 명령으로 인해 일부 서비스를 제한해야 할 경우</li>
            <li>기타 중대한 사유로 인해 서비스의 이용을 지속하는 것이 업무상 및 기술상 불가능할 경우 또는 운영상 서비스 제한이나 중지가 불가피하다고 회사가 판단되는 경우</li>
          </ol>
        </li>
        <li>③ Tradurs는 전항의 규정에 의해 서비스의 이용을 제한하거나 중지할 경우 그 사유 및 기간을 사전에 공지함을 원칙으로 합니다. 단, 사전에 예상하지 못했거나 회사가 통제할 수 없는
          상황이 발생할 경우 그러하지 아니합니다.</li>
        <li>④ Tradurs는 서비스의 목적이나 용도에 따라 합리적인 범위 내에서 이용규칙을 정할 수 있으며, 회원은 해당 규칙을 준수하며 서비스를 이용하여야 합니다.</li>
        <li>⑤ Tradurs는 회원의 가입일, 연령, 활동이력, 이용제한 요청 등에 따라 일부의 서비스를 제한할 수 있습니다. 이 경우 이용자가 알 수 있도록 그 기준과 제한 내용을 게시판 등에
          공지합니다.
        </li>
      </ul>
      <div class="text-h6">제10조 (서비스 이용의 제한 및 중지)</div>
      <ul>
        <li>① Tradurs는 효율적인 서비스 운영을 위하여 회원의 메모리 공간, 메시지크기, 보관일수 등을 제한할 수 있습니다.</li>
        <li>② Tradurs는 일정 기간동안 접속 이력이 없는 계정에 대하여 관련 법령에 따라 휴면계정 전환 또는 파기할 수 있습니다.</li>
        <li>③ Tradurs는 회원이 서비스 내에 게시하거나 전달하는 모든 내용물이 다음 각 호에 해당한다고 판단될 경우 사전 통보 없이 게시중단, 이동, 삭제 등의 조치를 취할 수 있으며 필요한
          경우 해당 회원의 서비스 이용자격을 일정 기간 제한하거나 영구 중지할 수 있습니다.
          <ol>
            <li>회원 또는 제3자에 대한 인신공격, 비하, 비방, 욕설, 중상모략, 허위사실 유포, 명예훼손 등의 내용이 포함된 경우</li>
            <li>타인을 고의적으로 기만하거나 부정하게 영리적, 업무적 기타 개인적인 이익을 얻을 목적임이 확인되는 경우</li>
            <li>자신의 종교적 신념을 강요하거나 타인의 종교를 비하한 경우</li>
            <li>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
            <li>범죄적 행위에 결부된다고 인정되는 내용인 경우</li>
            <li>회원 또는 제3자의 저작권이나 초상권 등 기타 권리를 침해하는 내용인 경우</li>
            <li>정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터바이러스 프로그램 등을 유포하는 경우</li>
            <li>스토킹, 불필요한 특수문자 과다사용, 반복적인 게시물 붙여넣기 등 다른 이용자의 이용을 방해하는 경우</li>
            <li>특정 집단에 대한 차별적 내용으로서 해당 집단이나 그 구성원들에게 굴욕감이나 불이익을 현저하게 초래하는 경우</li>
            <li>기타 관계법령에 위반되거나 Tradurs에서 정한 각 게시판의 목적에 따른 이용규칙에 어긋나는 경우</li>
          </ol>
        </li>
        <li>④ Tradurs는 회원의 공개된 게시물 등에 대하여 다른 이용자 혹은 제3자의 법률상 권리 침해를 근거로 게시중단 요청을 받은 경우 게시물을 삭제하거나 게시물 차단 등의 임시조치를 할 수
          있으며 게시중단 요청자와 게시물 등록 회원간의 합의 또는 법적조치의 결과 등이 접수되면 이를 따릅니다.</li>
        <li>⑤ Tradurs는 서비스 내에 공개된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 전항의 게시중단 요청이 없어도 해당 게시물을 게시중단 할 수
          있습니다.
        </li>
      </ul>
      <div class="text-h6">제11조 (권리의 귀속 및 저작물의 이용)</div>
      <ul>
        <li>① 서비스 내에서 게시된 게시물 등의 저작권은 해당 게시물의 저작자에게 귀속됩니다.</li>
        <li>② 다음 각 호에 해당하는 범위 내에서 Tradurs는 회원이 등록한 게시물을 이용할 수 있습니다.
          <ol>
            <li>서비스 내에서 게시물의 복제, 전송, 전시, 배포 및 이를 위해 게시물의 제목 및 내용을 변경하거나 수정 또는 이동할 수 있습니다.</li>
            <li>각각의 게시판의 용도에 적합하지 않거나 이용 규칙에 위배되는 경우, 게시물을 수정하거나 게시판의 위치를 변경, 또는 삭제할 수 있습니다.</li>
            <li>다른 회원의 신고 등에 의해 일정 시간 게시물의 내용이 차단될 수 있습니다.</li>
            <li>회원이 스크랩 등의 기능을 사용하여 게시물의 제목 및 링크를 이용할 수 있습니다.</li>
            <li>전체메일, 소식지 등의 배포를 위해 회원이 작성한 이미지, 제목, 내용의 일부를 전자메일로 배포할 수 있습니다.</li>
            <li>검색 등 향상된 서비스를 위해 관련 제휴사에게 게시물의 제목 및 내용, 게시자의 이메일, 별칭 등 필요한 정보를 제공할 수 있습니다. 단 이 경우 제공된 정보는 지정된 목적 이외에는
              사용되지 않으며, 성명, 이메일 등 회원의 개인정보는 제공되지 않습니다.</li>
          </ol>
        </li>
        <li>③ Tradurs는 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우 쪽지, 이메일, 약관의 재동의 등을 통해 회원의 동의를 얻습니다.</li>
        <li>④ 회원의 탈퇴 및 회원자격을 상실한 경우 해당 이메일에 기록된 스크랩, 쪽지, 주소록 등은 탈퇴 후 30일 이내에 자동 삭제됩니다. 단, 공개된 게시판에 게시된 게시물, 재게시되거나 복제된
          게시물과 타인의 게시물과 결합되어 제공되는 게시물은 자동 삭제되지 않으므로 탈퇴 전 본인이 직접 삭제하여야 합니다.</li>
      </ul>
      <div class="text-h6">제12조 (Tradurs의 의무)</div>
      <ul>
        <li>① Tradurs는 관련 법령과 이 약관이 정하는 사항을 준수하며, 지속적이고 안정적인 서비스를 위해 최선을 다합니다.</li>
        <li>② Tradurs는 회원의 회원정보를 보호하며, 개인정보 보호정책을 공시하고 준수합니다.</li>
        <li>③ Tradurs는 서비스 제공과 관련해서 알고 있는 회원의 신상 정보를 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의
          요구가 있는
          경우, 범죄에 대한 수사상의 목적이 있거나 또는 기타 관계법령에서 정한 절차에 의한 요청이 있을 경우에는 그러하지 아니합니다.</li>
        <li>④ Tradurs는 회원 수신 동의를 하지 않은 영리목적의 광고성 전자우편, SMS 문자서비스 등을 발송하지 아니합니다.</li>
      </ul> 제13조(회원 및 이용자의 책임) <ul>
        <li>① 회원은 자신의 로그인 패스워드 등 개인정보에 대한 관리책임을 가집니다.</li>
        <li>② 회원이 작성한 게시물 등에 대한 모든 권리와 책임은 이를 작성한 회원에게 있습니다.</li>
        <li>③ 서비스를 통해 얻은 정보를 그 정보 권리자의 동의없이 수집, 복제, 배포할 수 없습니다.</li>
        <li>④ 서비스를 이용하여 해킹, 불법자료의 배포 및 기타 불법행위를 하여서는 아니되며, 이를 위반하여 발생한 영업활동의 결과 및 손실, 관계기관에 의한 법적조치 등에 관하여서는 그 이용자가
          책임을 집니다.</li>
        <li>⑤ 회원은 Tradurs이 정한 약관 및 이용규칙을 숙지하고 준수하여야 합니다.</li>
      </ul>
      <div class="text-h6">제14조 (계약해지 및 이용제한)</div>
      <ul>
        <li>① 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 인터넷을 통하여 해지신청을 하여야 합니다. 단, 유관기관의 요청이 있는 경우 본인이 직접 탈퇴하지 않아도 이용계약 해지가 가능할 수
          있습니다.</li>
        <li>② 회원정보는 회원 탈퇴 30일 후 자동 삭제되며, 이 기간동안 재가입이 제한됩니다.</li>
        <li>③ 회원 탈퇴 시 해당 아이디와 연계된 쪽지, 스크랩내용 등은 삭제되나, 공개된 게시판에 작성한 게시물 등은 삭제되지 않으며 삭제를 원할 경우 본인이 직접 삭제 후 탈퇴하여야 합니다.
        </li>
        <li>④ 사이트 이용규칙 또는 약관 등을 위반하여 징계 중인 상태에서 탈퇴할 경우 재가입할 수 없으며, 만일 재가입 후 징계사실이 확인되면 이용이 제한되거나 이전 회원조치이력을 승계할 수
          있습니다.</li>
      </ul>
      <div class="text-h6">제15조 (양도금지)</div>
      <p> 회원은 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다. </p>
      <div class="text-h6">제16조 (손해배상)</div>
      <p> Tradurs는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 Tradurs의 고의 또는 중대한 과실로 인한 경우를 제외하고 이에 대하여 책임을 부담하지
        아니합니다. </p>
      <div class="text-h6">제17조 (면책 조항)</div>
      <ul>
        <li>① Tradurs는 천재지변, 전쟁 또는 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
        <li>② Tradurs는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.</li>
        <li>③ Tradurs는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
        <li>④ Tradurs는 회원이 서비스를 이용하여 기대하는 이익이나 서비스를 통하여 얻는 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
        <li>⑤ Tradurs는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.</li>
      </ul>
      <div class="text-h6">제18조 (관할법원)</div>
      <p> 서비스 이용으로 발생한 분쟁에 대해 소송이 제기 될 경우 당 회사의 소재지를 관할하는 법원을 전속 관할법원으로 합니다. </p>
      <div class="text-h6">부 칙</div>
      <p> (시행일) 이 약관은 2023년 6월 10일부터 시행합니다. </p>
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