import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  Resize,
  ColumnDirective,
  Page,
  Sort,
  ContextMenu,
  Filter,
  ExcelExport,
  PdfExport,
  Edit,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
      <Header title="orders" category="Page" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Page,
            ContextMenu,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
