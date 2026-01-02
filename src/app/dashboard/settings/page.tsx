"use client";

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Tenant Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        This is a placeholder for settings configuration.
                    </p>
                </CardContent>
            </Card>
        </DashboardLayout>
    );
}
