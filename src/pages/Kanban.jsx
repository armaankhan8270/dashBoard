import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div>
      <Header categorey='APP' title='KanBan'/>
      <KanbanComponent
      id='kanban'
      dataSource={kanbanData}
      keyField={"Status"}
      cardSettings={{contentField:"Summary",headerField: 'Id'}}
      >
        <ColumnsDirective>
        {kanbanGrid.map((item,ind)=>(
          <ColumnDirective key={ind} {...item}/>
        ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban