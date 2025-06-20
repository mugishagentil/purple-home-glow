
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Plus, Trash2 } from 'lucide-react';

const Vendors = () => {
  const vendors = [
    { id: 1, name: 'Mugish Gentil', location: 'Kigali Gasibo', orders: 3, sales: '300.00 rwf', status: 'REJECTED', avatar: 'MG' },
    { id: 2, name: 'Beritha', location: 'Nyarugenge', orders: 0, sales: '300.00 rwf', status: 'PUBLISHED', avatar: 'B' },
    { id: 3, name: 'Willy', location: 'Rwamagana', orders: 6, sales: '300.00 rwf', status: 'PUBLISHED', avatar: 'W' },
    { id: 4, name: 'Britney', location: 'Nyanza', orders: 0, sales: '300.00 rwf', status: 'PENDING', avatar: 'B' },
    { id: 5, name: 'Bubola', location: 'Rulindo', orders: 0, sales: '300.00 rwf', status: 'PUBLISHED', avatar: 'B' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PUBLISHED':
        return 'text-green-600';
      case 'REJECTED':
        return 'text-red-600';
      case 'PENDING':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <DashboardLayout currentPage="vendors">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Vendors</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search" 
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>

          {/* Total Vendor Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Vendor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">23</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <div className="flex space-x-4">
          <Button variant="outline" size="sm" className="bg-gray-100">
            All
          </Button>
        </div>

        {/* Vendors Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Vendors</h2>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Import</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
            
            <div className="mt-4 relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search Vendors" 
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
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">VENDORS</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">LOCATION</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ORDERS</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">SALES</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white font-medium">
                        {vendor.avatar}
                      </div>
                      <span className="font-medium">{vendor.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{vendor.location}</td>
                  <td className="px-6 py-4 text-gray-900">{vendor.orders}</td>
                  <td className="px-6 py-4 text-gray-900">{vendor.sales}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <span className={`text-sm font-medium ${getStatusColor(vendor.status)}`}>
                        {vendor.status}
                      </span>
                    </div>
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

export default Vendors;
