import { createRootRoute, Outlet } from "@tanstack/react-router";
import Menu from "../components/Menu.tsx";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="min-w-screen flex flex-row items-center justify-between px-6 py-3">
        <div className="">
          <p className="font-bold text-2xl">Gknow</p>
        </div>
        <div className="flex flex-1 justify-center px-4">
          <div className="flex flex-row items-center border border-b3 focus-within:border-black transition-colors duration-200 h-10 min-w-30 max-w-190 w-full justify-between px-3 rounded-3xl">
            <input placeholder="검색" className="flex flex-1 mr-2 outline-none"></input>
            <button className="flex justify-center items-center">
              <span className="material-icons text-b3">search</span>
            </button>
          </div>
        </div>
        <div className="">
          <span className="material-icons text-3xl! text-main-blue">account_circle</span>
        </div>
      </header>
      <div id="main" className="flex flex-row px-6 py-3 gap-20">
        <ul id="menu" className="flex flex-col gap-0.5">
          <Menu icon="person_search" text="교수님 찾기" path="/prof" />
          <Menu icon="info" text="시설 정보" path="/facility" />
          <Menu icon="calendar_month" text="세미나 일정" path="/seminar" />
        </ul>
        <div id="content" className="flex flex-col flex-1 h-full w-4/5 gap-2">
          <Outlet />
        </div>
      </div>

      {/*<TanStackRouterDevtools />*/}
    </>
  ),
});
