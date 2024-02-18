import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DropWrap } from "./style";
import TaskDrop from "./task_drop";
import { Button } from "antd";

function BoardDrop(props) {
  const { handleDragEnd, list, handleCreateTask } = props;

  return (
    <DropWrap>
      <DragDropContext onDragEnd={handleDragEnd} direction="horizontal">
        <Droppable
          droppableId="droppable-board"
          direction="horizontal"
          type="board"
        >
          {(provided, snapshot) => {
            return (
              <div
                className="droppable-warp"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-warp"
                      >
                        <div className="draggable-warp-content">
                          <span className="draggable-warp-title">需求</span>
                          <TaskDrop task={item} />
                          <Button
                            // type="primary"
                            className="draggable-warp-create-task"
                            size="small"
                            onClick={() =>
                              handleCreateTask(
                                provided.draggableProps["data-rbd-draggable-id"]
                              )
                            }
                          >
                            新建任务
                          </Button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </DropWrap>
  );
}

export default BoardDrop;
