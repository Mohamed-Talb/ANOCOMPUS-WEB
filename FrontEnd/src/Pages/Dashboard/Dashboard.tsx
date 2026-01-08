import StatsOverview from "./StatsOverview/overview";
import LatestAnnoncements from "./LatestAnnoncements/LatestAnnoncements";
import LatestReports from "./LatestReports/LatestReports";

function Dashboard() {
  // Shared classes for the white card containers
  const sectionItemClasses = `
        bg-[#1E1E1E] border-2 border-white rounded-2xl shadow-md shadow-white/30
        min-w-0 overflow-hidden flex flex-col
        p-[14px] md:p-5 lg:p-6
        /* Typography for h2/h3 inside child components */
        [&_h2]:font-['Poppins'] [&_h2]:text-[#374151] [&_h2]:mb-5 [&_h2]:text-xl [&_h2]:font-semibold
        [&_h3]:font-['Poppins'] [&_h3]:text-[#374151] [&_h3]:mb-5 [&_h3]:text-xl [&_h3]:font-semibold
        [&_*]:w-full [&_*]:max-w-full
    `;

  return (
    /* Dashboard Wrapper */
    <div className="flex min-h-screen bg-[#222831] p-3 sm:p-[15px] lg:p-5">
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-0 lg:px-[15px] xl:px-0">
        <h1 className="font-['Poppins'] font-semibold text-[#ff6b35] mb-5 md:mb-[30px] text-[1.375rem] md:text-[1.75rem] lg:text-[2rem]">
          Dashboard
        </h1>

        <section className="mb-[30px]">
          <StatsOverview />
        </section>

        <section className="grid w-full gap-4 sm:gap-5 md:gap-[25px] lg:gap-[30px] mb-[30px] grid-cols-1 min-[1200px]:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
          <div className={sectionItemClasses}>
            <LatestReports />
          </div>
          <div className={sectionItemClasses}>
            <LatestAnnoncements />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
