'use client';

import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function CalendarComponents() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());


    const generateRandomIntensityMap = (year: number, month: number) => {
        const map: Record<string, number> = {};
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateStr = date.toISOString().split("T")[0];
            map[dateStr] = Math.floor(Math.random() * 4);
        }
        return map;
    };


    const intensityMap = generateRandomIntensityMap(2025, 9);
    return (
        <>
            <div className={`p-8 transition-colors duration-300`}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm !text-primary"
                    intensityMap={intensityMap}
                    
                />
            </div>

        </>



    );
}
