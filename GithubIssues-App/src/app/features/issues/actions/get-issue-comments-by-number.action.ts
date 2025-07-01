import { sleep } from "@helpers/sleep";
import { GitHubIssue } from "../interfaces";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueCommentsByNumber = async ( number: string ): Promise<GitHubIssue[]> => {
    await sleep(1500);

    try {
        const resp = await fetch(`${BASE_URL}/issues/${number}/comments`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        });

        if(!resp.ok) throw "Can't load issue comments";

        const issueComments: GitHubIssue[] = await resp.json();
        return issueComments;
    } catch (error) {
        throw "Can't load issue comments";
    }
}