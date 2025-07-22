import { ObjectId } from "mongodb";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req, { params }) {
    const p = await params;
    const singleData = await dbConnect('practice_data').findOne({ _id: new ObjectId(p.id) });

    return Response.json(singleData)
}

export async function DELETE(req, { params }) {
    const p = await params;
    const res = await dbConnect('practice_data').deleteOne({ _id: new ObjectId(p.id) });

    return Response.json(res)
}

export async function PATCH(req, { params }) {

    const p = await params;
    const postedData = await req.json();
    const filter = { _id: new ObjectId(p.id) };
    const updatedRes = await dbConnect('practice_data').updateOne(filter, { $set: { ...postedData } });

    return Response.json(updatedRes)
}