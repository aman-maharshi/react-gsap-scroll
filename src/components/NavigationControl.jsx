import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ResetIcon } from "./icons/NavigationIcons"

const NavigationControl = ({ modelSwitcherRef }) => {
  return (
    <div className="navigation-control">
      <div className="nav-grid">
        <div className="nav-spacer"></div>
        <button onClick={() => modelSwitcherRef.current?.rotateUp()} className="nav-button" aria-label="Rotate up">
          <ArrowUpIcon />
        </button>
        <div className="nav-spacer"></div>

        <button onClick={() => modelSwitcherRef.current?.rotateLeft()} className="nav-button" aria-label="Rotate left">
          <ArrowLeftIcon />
        </button>
        <button
          onClick={() => modelSwitcherRef.current?.reset()}
          className="nav-button reset-button"
          aria-label="Reset"
        >
          <ResetIcon />
        </button>
        <button
          onClick={() => modelSwitcherRef.current?.rotateRight()}
          className="nav-button"
          aria-label="Rotate right"
        >
          <ArrowRightIcon />
        </button>

        <div className="nav-spacer"></div>
        <button onClick={() => modelSwitcherRef.current?.rotateDown()} className="nav-button" aria-label="Rotate down">
          <ArrowDownIcon />
        </button>
        <div className="nav-spacer"></div>
      </div>
    </div>
  )
}

export default NavigationControl
