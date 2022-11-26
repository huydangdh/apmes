type LoadingState = {
    // Multiple possible status enum values
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}


export type { LoadingState }