
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Orders = () => {
  const orders = [
    { id: 1, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 2, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 3, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 4, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 5, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 6, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 7, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
    { id: 8, customer: 'Gentil Mugisha', product: 'Shirt', date: '20/1/25', time: '12:00 AM', price: '4000Frw' },
  ];

  return (
    <DashboardLayout currentPage="orders">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search" 
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium">Id</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Customer Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Product Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Picture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>{order.date}</div>
                    <div className="text-gray-500">{order.time}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.price}</td>
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 bg-gray-300 rounded"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
