import {
  Users,
  ClipboardList,
  Wrench,
  GitBranch,
  CalendarCheck,
  PieChart,
} from "lucide-react";

export default function Collaboration() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20 text-gray-200">
      {/* 타이틀 */}
      <header className="text-center mb-20">
        <h2 className="text-6xl font-extrabold relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
          Collaboration
          <span
            aria-hidden="true"
            className="absolute left-0 bottom-0 w-full h-2 rounded-full opacity-70 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 blur-sm animate-[pulse_3s_ease-in-out_infinite]"
          />
        </h2>
        <p className="mt-4 text-lg italic text-gray-400 tracking-wide max-w-xl mx-auto">
          팀워크로 완성한 프로젝트 이야기
        </p>
      </header>

      {/* 카드 컨테이너 */}
      <div className="space-y-12">
        {/* 팀원 구성 */}
        <Card
          icon={<Users size={28} className="text-purple-400" />}
          title="팀원 구성"
        >
          프론트엔드 2명, 백엔드 1명, 디자이너 1명으로 구성된 4인 팀
          프로젝트입니다.
        </Card>

        {/* Roles & Responsibilities */}
        <Card
          icon={<ClipboardList size={28} className="text-pink-400" />}
          title="Roles & Responsibilities"
        >
          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-800 text-gray-100">
                <tr>
                  <th className="px-6 py-4">이름</th>
                  <th className="px-6 py-4">역할</th>
                  <th className="px-6 py-4">담당 영역</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-gray-900">
                <tr>
                  <td className="px-6 py-4">윤혜림 (FE)</td>
                  <td className="px-6 py-4">팀장 / 프론트엔드</td>
                  <td className="px-6 py-4">
                    공통 컴포넌트, 페이지 설계, 프로젝트 구조
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">김예시 (FE)</td>
                  <td className="px-6 py-4">프론트엔드</td>
                  <td className="px-6 py-4">마크업, API 연동, 반응형 대응</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">박예시 (BE)</td>
                  <td className="px-6 py-4">백엔드</td>
                  <td className="px-6 py-4">API 개발, DB 구축, 배포</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">이예시 (디자이너)</td>
                  <td className="px-6 py-4">디자인</td>
                  <td className="px-6 py-4">Figma 시안 제작, UI/UX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* 협업 도구 */}
        <Card
          icon={<Wrench size={28} className="text-indigo-400" />}
          title="협업 도구"
        >
          <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Figma</strong> - 디자인 및 프로토타이핑
            </li>
            <li>
              <strong>Notion, JIRA</strong> - 프로젝트 관리 및 문서화
            </li>
            <li>
              <strong>GitHub</strong> - 버전 관리 및 코드 리뷰
            </li>
            <li>
              <strong>Slack, Google Meet</strong> - 실시간 소통
            </li>
          </ul>
        </Card>

        {/* Git 전략 */}
        <Card
          icon={<GitBranch size={28} className="text-pink-400" />}
          title="Git 전략"
        >
          <p className="mt-3 text-gray-300 leading-relaxed max-w-xl">
            <strong>main</strong>, <strong>develop</strong>,{" "}
            <code>feature/기능명</code> 브랜치 전략을 사용하며, 모든 기능은 PR을
            통해 리뷰 후 병합했습니다.
            <br />
            커밋 메시지는 <code>feat:</code>, <code>fix:</code>,{" "}
            <code>docs:</code> 등 prefix 규칙을 엄격히 적용했습니다.
          </p>
        </Card>

        {/* 회의 방식 */}
        <Card
          icon={<CalendarCheck size={28} className="text-indigo-400" />}
          title="회의 방식"
        >
          <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2 max-w-lg">
            <li>매일 오전 10시에 온라인 스크럼 진행 (Google Meet)</li>
            <li>기능별 토론은 비정기적으로 진행</li>
            <li>회의록과 일정은 Notion으로 체계적 관리</li>
          </ul>
        </Card>

        {/* 기여 비율 */}
        <Card
          icon={<PieChart size={28} className="text-purple-400" />}
          title="기여 비율"
        >
          <div className="mt-4 max-w-xs space-y-4">
            <ContributionBar label="개발" percent={70} color="bg-purple-400" />
            <ContributionBar label="기획" percent={15} color="bg-indigo-400" />
            <ContributionBar label="문서화" percent={15} color="bg-pink-400" />
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-7 shadow-[0_10px_30px_rgba(128,90,213,0.4)] border border-gray-700 hover:shadow-[0_15px_40px_rgba(128,90,213,0.7)] transition-shadow duration-300">
      <header className="flex items-center space-x-4 mb-4">
        <div className="flex-none p-3 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 shadow-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>
      </header>
      <div className="text-gray-300">{children}</div>
    </article>
  );
}

function ContributionBar({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-gray-300 font-medium mb-1 text-sm">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className={`${color} h-4 rounded-full transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
