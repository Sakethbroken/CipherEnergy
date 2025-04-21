import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

type OrderStatus = "Pending" | "In Transit" | "Delivered";

type Order = {
  id: number;
  order_date: string;
  expected_delivery: string;
  warehouse: string;
  status: OrderStatus;
};

const OrdersManagementPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, order_date: "2024-04-01", expected_delivery: "2024-04-10", warehouse: "Warehouse A", status: "Pending" },
    { id: 2, order_date: "2024-04-03", expected_delivery: "2024-04-12", warehouse: "Warehouse B", status: "In Transit" },
    { id: 3, order_date: "2024-04-05", expected_delivery: "2024-04-15", warehouse: "Warehouse C", status: "Delivered" },
  ]);

  const [newOrder, setNewOrder] = useState<{
    order_date: string;
    expected_delivery: string;
    warehouse: string;
    status: OrderStatus;
  }>({
    order_date: "",
    expected_delivery: "",
    warehouse: "",
    status: "Pending",
  });

  const [filter, setFilter] = useState<OrderStatus | "All">("All");

  const handleCreateOrder = () => {
    const nextId = orders.length + 1;
    setOrders([
      ...orders,
      { id: nextId, ...newOrder },
    ]);
    setNewOrder({ order_date: "", expected_delivery: "", warehouse: "", status: "Pending" });
  };

  const getStatusBadgeVariant = (status: OrderStatus) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "In Transit":
        return "default";
      case "Delivered":
        return "destructive";
    }
  };

  const filteredOrders = filter === "All" ? orders : orders.filter((order) => order.status === filter);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Orders Management</h1>

      {/* Create Order Form */}
      <Card className="rounded-2xl">
        <CardContent className="p-4 space-y-4">
          <CardTitle className="text-lg font-medium text-muted-foreground">Create Order</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label>Order Date</Label>
              <Input
                type="date"
                value={newOrder.order_date}
                onChange={(e) => setNewOrder({ ...newOrder, order_date: e.target.value })}
              />
            </div>
            <div>
              <Label>Expected Delivery</Label>
              <Input
                type="date"
                value={newOrder.expected_delivery}
                onChange={(e) => setNewOrder({ ...newOrder, expected_delivery: e.target.value })}
              />
            </div>
            <div>
              <Label>Warehouse</Label>
              <Input
                type="text"
                value={newOrder.warehouse}
                onChange={(e) => setNewOrder({ ...newOrder, warehouse: e.target.value })}
              />
            </div>
            <div>
              <Label>Status</Label>
              <Select
                value={newOrder.status}
                onValueChange={(value: OrderStatus) => setNewOrder({ ...newOrder, status: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleCreateOrder}>Create Order</Button>
        </CardContent>
      </Card>

      {/* Filter Orders by Status */}
      <div className="flex gap-4 items-center">
        <Label>Status Filter:</Label>
        <Select value={filter} onValueChange={(val: OrderStatus | "All") => setFilter(val)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="In Transit">In Transit</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <CardTitle className="mb-4 text-lg font-medium text-muted-foreground">Orders</CardTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase border-b">
                <tr>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Order Date</th>
                  <th className="px-4 py-2">Expected Delivery</th>
                  <th className="px-4 py-2">Warehouse</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2">#{order.id}</td>
                    <td className="px-4 py-2">{order.order_date}</td>
                    <td className="px-4 py-2">{order.expected_delivery}</td>
                    <td className="px-4 py-2">{order.warehouse}</td>
                    <td className="px-4 py-2">
                      <Badge variant={getStatusBadgeVariant(order.status)}>{order.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersManagementPage;