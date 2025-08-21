import { NextResponse } from 'next/server';
import User from '@/app/models/User.models';
import TeamMember from '@/app/models/TeamMember.models';
import { dbConnect } from '@/lib/dbConnect';

export async function POST(req) {
  const { email } = await req.json();

  try {
    await dbConnect();

    const student = await User.findOne({ email });

    if (!student) {
      const teamMember = await TeamMember.findOne({ email });
      if (teamMember) {
        console.log("Team Member found:", teamMember);
        return NextResponse.json({ isTeamMember: true, teamMember });
      }
    }

    return NextResponse.json({ isTeamMember: false, student });
  } catch (error) {
    console.error('MongoDB error:', error);
    return NextResponse.json({ error: 'Error connecting to MongoDB' }, { status: 500 });
  }
}
