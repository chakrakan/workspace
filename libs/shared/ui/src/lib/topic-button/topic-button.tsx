import { useEffect } from 'react';
import { useState } from 'react';
export interface TopicButtonProps {
  topicName: string;
  onClick?: (topicName: string) => void;
}

export function TopicButton(props: TopicButtonProps) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.topicName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();
      const topicSvgIcon = await import(`./${cleanedSvgName}.svg`);
      setIcon(topicSvgIcon.default);
    };
    fetchData();
  }, [props.topicName]);

  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick(props.topicName);
    } else {
      console.warn(
        `no click handler defined on topic button with topic ${props.topicName}`
      );
    }
  };

  return (
    <div
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 hover:shadow-md transition-shadow"
      data-testid="topicButton"
      onClick={onClickHandler}
    >
      <img src={icon} alt="" className="h-12 w-12" />
      <div className="p-5">
        <h2 className="font-bold text-4xl" data-testid="topicName">
          {props.topicName}
        </h2>
      </div>
    </div>
  );
}

export default TopicButton;
