"use client";

import React from 'react';
import { Building2, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';

export type Tenant = {
    id: string;
    name: string;
}

interface TenantSwitcherProps {
    tenants: Tenant[];
    currentTenant: Tenant;
    onTenantChange: (tenant: Tenant) => void;
}

export function TenantSwitcher({ tenants, currentTenant, onTenantChange }: TenantSwitcherProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex w-[200px] items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                )}
            >
                <span className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    {currentTenant.name}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </button>

            {isOpen && (
                <Card className="absolute top-full mt-1 w-[200px] z-50">
                    <ul className="p-1">
                        {tenants.map(tenant => (
                            <li
                                key={tenant.id}
                                className={cn(
                                    "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground cursor-pointer",
                                    currentTenant.id === tenant.id && "bg-accent"
                                )}
                                onClick={() => {
                                    onTenantChange(tenant);
                                    setIsOpen(false);
                                }}
                            >
                                <Building2 className="ml-2 h-4 w-4" />
                                {tenant.name}
                            </li>
                        ))}
                    </ul>
                </Card>
            )}
        </div>
    );
}
