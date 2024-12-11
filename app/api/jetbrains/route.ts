import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pluginId = searchParams.get("pluginId");
  const endpoint = searchParams.get("endpoint") || "";
  const offset = searchParams.get("offset");
  const limit = searchParams.get("limit");

  if (!pluginId) {
    return NextResponse.json(
      { error: "Plugin ID is required" },
      { status: 400 }
    );
  }

  try {
    const baseUrl = "https://plugins.jetbrains.com/api/plugins";
    let url = `${baseUrl}/${pluginId}`;

    if (endpoint === "reviews") {
      url = `${baseUrl}/${pluginId}/comments`;
      const params = new URLSearchParams({
        offset: (offset || "0").toString(),
        limit: (limit || "10").toString(),
        orderBy: "cdate desc",
      });
      url += `?${params.toString()}`;
      console.log("Reviews API URL:", url);
    } else if (endpoint) {
      url += `/${endpoint}`;
      console.log("Endpoint API URL:", url);
    } else {
      console.log("Base API URL:", url);
    }

    const headers = {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    };

    const response = await fetch(url, { headers });
    const data = await response.json();

    if (!response.ok) {
      console.error("API error response:", {
        status: response.status,
        data: data,
      });
      throw new Error(
        `JetBrains API responded with status: ${response.status}, message: ${
          data.error || "Unknown error"
        }`
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch plugin data",
        endpoint,
        pluginId,
      },
      { status: 500 }
    );
  }
}
