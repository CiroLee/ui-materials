import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Calendar from '@ui/Calendar';
import Button from '@ui/Button';
import Switch from '@ui/Switch';
import Tooltip from '@ui/Tooltip';
import CodeView from '@site/components/CodeView';
import baseMd from './docs/base.md?raw';
import headerMd from './docs/header.md?raw';
import cellMd from './docs/cell.md?raw';
import weekMd from './docs/week.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function CalendarPage() {
  const [startWeekOnSunday, setStartWeekOnSunday] = useState(true);
  const dateChangeHandler = (date: Date, type: 'prev' | 'next') => {
    const newDate = new Date(date);
    if (type === 'prev') {
      newDate.setMonth(date.getMonth() - 1);
    } else {
      newDate.setMonth(date.getMonth() + 1);
    }
    return newDate;
  };
  return (
    <>
      <NavTitle title="Calendar" sourceName="Calendar" />
      <Description>A component to display calendar information</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Calendar
          onChange={(date) => {
            console.log('your have choose: ', date.toLocaleDateString());
          }}
        />
        <CodeView content={baseMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          headerContent
        </Heading>
        <Calendar
          headerContent={({ onChange, value }) => {
            return (
              <div className="flex justify-end items-center mb-2">
                <Button
                  outline
                  size="small"
                  shape="square"
                  onClick={() => {
                    const newDate = dateChangeHandler(value, 'prev');
                    onChange(newDate);
                  }}>
                  <RiArrowLeftSLine />
                </Button>
                <span className="mx-2 text-lg">{value.toLocaleDateString()}</span>
                <Button
                  outline
                  size="small"
                  shape="square"
                  onClick={() => {
                    const newDate = dateChangeHandler(value, 'next');
                    onChange(newDate);
                  }}>
                  <RiArrowRightSLine />
                </Button>
                <Button
                  outline
                  size="small"
                  className="ml-2"
                  onClick={() => {
                    onChange(new Date());
                  }}>
                  Today
                </Button>
              </div>
            );
          }}
        />
        <CodeView content={headerMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          startWeekOnSunday
        </Heading>
        <div className="flex items-center mb-2">
          <Switch checked={startWeekOnSunday} onCheckedChange={setStartWeekOnSunday} />
          <span className="ml-2">: {`${startWeekOnSunday}`}</span>
        </div>
        <Calendar startWeekOnSunday={startWeekOnSunday} />
        <CodeView content={weekMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          cellContent
        </Heading>
        <Calendar
          cellContent={(date) => {
            if (date.getDate() === 10) {
              return (
                <>
                  <Tooltip title="deadline TODAY">
                    <div className="whitespace-nowrap text-sm ellipsis">
                      <span className="size-[8px] rounded-[4px] bg-warn-500 inline-block" />
                      <span className="ml-2">deadline TODAY</span>
                    </div>
                  </Tooltip>
                  <Tooltip title="salary day">
                    <div className="whitespace-nowrap text-sm ellipsis">
                      <span className="size-[8px] rounded-[4px] bg-success-500 inline-block" />
                      <span className="ml-2">salary day</span>
                    </div>
                  </Tooltip>
                  <Tooltip title="shopping after work">
                    <div className="whitespace-nowrap text-sm ellipsis">
                      <span className="size-[8px] rounded-[4px] bg-success-500 inline-block" />
                      <span className="ml-2">shopping after work</span>
                    </div>
                  </Tooltip>
                </>
              );
            }
          }}
        />
        <CodeView content={cellMd} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
