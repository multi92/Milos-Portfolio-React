import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  return (
    <div className="expiriance">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-elemnt-title">
            Visoka Tehnicka Skola Nis
          </h3>
          <p>Diplomirani Inzenjer Zastite Zivotne Sredine</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-elemnt-title">
            Visoka Tehnicka Skola Nis
          </h3>
          <p>Master Studije Savremene racunarkse tehnologije</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-elemnt-title">
          Level Up Nis
          </h3>
          <p>Kurs Javascript,Html,Bootsptrap</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-elemnt-title">
          Level Up Nis
          </h3>
          <p>Php, MySql</p>
        </VerticalTimelineElement> <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-elemnt-title">
          Level Up Nis
          </h3>
          <p>Php, MySql</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-elemnt-title">
            Samostalni Projekti
          </h3>

          <a href="https://github.com/multi92">Github</a>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
