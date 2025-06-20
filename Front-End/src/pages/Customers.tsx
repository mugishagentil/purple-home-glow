
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Edit } from 'lucide-react';

const Customers = () => {
  const customers = [
    { id: 1, name: 'Mugish Gentil', location: 'Kigali Gasibo', orders: 3, paid: '300.00 rwf', avatar: 'MG' },
    { id: 2, name: 'Beritha', location: 'Nyarugenge', orders: 0, paid: '300.00 rwf', avatar: 'B' },
    { id: 3, name: 'Willy', location: 'Rwamagana', orders: 6, paid: '300.00 rwf', avatar: 'W' },
    { id: 4, name: 'Britney', location: 'Nyanza', orders: 0, paid: '300.00 rwf', avatar: 'B' },
    { id: 5, name: 'Bubola', location: 'Rulindo', orders: 0, paid: '300.00 rwf', avatar: 'B' },
  ];

  return (
    <DashboardLayout currentPage="customers">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search" 
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="accepts">Accepts Marketing</TabsTrigger>
            <TabsTrigger value="prospect">Prospect</TabsTrigger>
            <TabsTrigger value="returning">Returning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Customers</h2>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">Import</Button>
                    <Button variant="outline" size="sm">Export</Button>
                  </div>
                </div>
                
                <div className="mt-4 relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search customers" 
                    className="pl-10"
                  />
                </div>
              </div>

              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">CUSTOMERS</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">LOCATION</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ORDERS</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">PAID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white font-medium">
                            {customer.avatar}
                          </div>
                          <span className="font-medium">{customer.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{customer.location}</td>
                      <td className="px-6 py-4 text-gray-900">{customer.orders}</td>
                      <td className="px-6 py-4 text-gray-900">{customer.paid}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
