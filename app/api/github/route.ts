import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userRes = await fetch("https://api.github.com/users/nurdiansyahagung10", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      cache: "no-store",
    });

    const user = await userRes.json();

    const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

    const gqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    const gqlData = await gqlRes.json();

    return NextResponse.json({
      repos: user.public_repos,
      followers: user.followers,
      joinedYear: new Date(user.created_at).getFullYear(),
      contributions: gqlData.data.viewer.contributionsCollection.contributionCalendar

    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}