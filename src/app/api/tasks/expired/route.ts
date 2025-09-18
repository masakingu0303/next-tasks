import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";


export const GET = async () => {
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    try {
        await connectDb();
        const expiredTasks: TaskDocument[] = await TaskModel.find({
            isCompleted: false,
            dueDate: { $lt: currentDate },
        });

        return NextResponse.json({message: '期限切れタスク取得成功', tasks: expiredTasks});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'タスク取得失敗'}, {status: 500})
    }
};

export const dynamic = 'force-dynamic';