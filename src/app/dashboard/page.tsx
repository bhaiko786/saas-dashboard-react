"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { OverviewChart } from '@/components/dashboard/OverviewChart';
import { TenantSwitcher, Tenant } from '@/components/dashboard/TenantSwitcher';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Users, DollarSign, Activity } from 'lucide-react';

const MOCK_TENANTS: Tenant[] = [
    { id: 't1', name: 'Acme Corp' },
    { id: 't2', name: 'Globex Inc' },
    { id: 't3', name: 'Soylent Corp' }
];

const MOCK_DATA: Record<string, any> = {
    't1': {
        revenue: [12000, 19000, 3000, 5000, 2000, 3000],
        users: 1200,
        active: 340,
        totalRevenue: 45000
    },
    't2': {
        revenue: [8000, 12000, 15000, 17000, 19000, 24000],
        users: 850,
        active: 200,
        totalRevenue: 95000
    },
    't3': {
        revenue: [5000, 4000, 3000, 2000, 1000, 500],
        users: 120,
        active: 10,
        totalRevenue: 15500
    }
};

export default function DashboardPage() {
    const [currentTenant, setCurrentTenant] = useState<Tenant>(MOCK_TENANTS[0]);

    const tenantData = MOCK_DATA[currentTenant.id];

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: tenantData.revenue,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.3
            },
        ],
    };

    return (
        <DashboardLayout>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <TenantSwitcher
                    tenants={MOCK_TENANTS}
                    currentTenant={currentTenant}
                    onTenantChange={setCurrentTenant}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${tenantData.totalRevenue.toLocaleString()}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{tenantData.users}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{tenantData.active}</div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-1">
                <OverviewChart data={chartData} />
            </div>

        </DashboardLayout>
    );
}
