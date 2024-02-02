import { useTrackerStore } from "../../../../store/trackerStore";
import ButtonCTA from "../../../../component/common/buttonCta";
import { status } from "../../../../services/constants";
import { isEpicSection } from "../../../../services/common";
import StepsIndicator from "../../../common/stepper";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip, { TooltipProps } from "react-bootstrap/Tooltip";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";
import "./index.scss";

const EpicDetails = () => {
  const { tasks, epics, view, setSelectedEpic, selectedEpic } =
    useTrackerStore();

  const selectedEpicProgress = tasks?.filter(
    (elem) => elem.epic === selectedEpic?.name
  );

  const currentSelectedEpicStatus =
    (selectedEpic &&
      epics?.filter((elem) => elem.epicNumber === selectedEpic.id)[0].status) ||
    "none";

  const currentSelectedEpicSteps = status.indexOf(
    currentSelectedEpicStatus || ""
  );

  const renderTooltip = (
    props: JSX.IntrinsicAttributes &
      TooltipProps &
      RefAttributes<HTMLDivElement>
  ) => (
    <Tooltip id="button-tooltip" {...props}>
      {selectedEpicProgress?.map((elem, index) => {
        return (
          <>
            <p
              key={`${elem.description}_${index}`}
            >{`Status: ${elem.status} Desc: ${elem.description}`}</p>
            <br key={`${elem.description}_${index}`} />
          </>
        );
      })}
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <div>
          <StepsIndicator
            activeStep={currentSelectedEpicSteps}
            options={status}
          />
        </div>
      </OverlayTrigger>
      {isEpicSection(view) ? (
        <>
          <p className="title">{selectedEpic?.name}</p>

          {epics?.map((elem, index) => {
            return (
              <ButtonCTA
                key={`${elem}_${index}`}
                text={elem.epic || ""}
                variant="dark"
                onClick={() =>
                  setSelectedEpic({
                    name: elem.epic || "",
                    id: elem.epicNumber || "",
                  })
                }
              />
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default EpicDetails;
