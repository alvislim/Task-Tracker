import { createRootRoute, Outlet } from "@tanstack/react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { userData, currentLoginUser, taskLists } from "../dummydata";
import Loader from "../component/common/loader";
import { useTrackerStore } from "../store/trackerStore";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: () => {
    const { setCurrentLoginUser, setTasks, setUserList } = useTrackerStore();
    const { currentLoginUser, taskLists, userData } = Route.useLoaderData();

    useEffect(() => {
      setCurrentLoginUser(currentLoginUser);
      setTasks(taskLists);
      setUserList(userData);
    }, [currentLoginUser, taskLists, userData]);

    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Task Tracker</Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
  },
  loader: async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return {
      userData,
      currentLoginUser,
      taskLists,
    };
  },
  errorComponent: () => {
    return <h1>Error</h1>;
  },
  pendingComponent: () => {
    return <Loader />;
  },
});
