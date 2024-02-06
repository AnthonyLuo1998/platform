import { StarFilled, StarOutlined, StarTwoTone } from "@ant-design/icons";

function Collect(props) {
  const { isCollect, isDisplay } = props;
  return (
    <>
      {isDisplay ? (
        <StarTwoTone />
      ) : isCollect ? (
        <StarFilled style={{ color: "gold", cursor: "pointer" }} />
      ) : (
        <StarOutlined style={{ cursor: "pointer" }} />
      )}
    </>
  );
}

export default Collect;
