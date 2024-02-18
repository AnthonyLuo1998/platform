import { Draggable, Droppable } from "react-beautiful-dnd";
function TaskDrop(props) {
  const task = props.task;

  const task_list = task.task;

  const task_id = task.id;

  return (
    <Droppable droppableId={task_id} type="task">
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="drop-wrap-task"
          >
            {task_list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="drag-wrap-task"
                  >
                    {item.value}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

export default TaskDrop;
