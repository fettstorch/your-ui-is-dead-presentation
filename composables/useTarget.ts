const target: 'web' | 'local' = import.meta.env.VITE_TARGET || 'local'

export function useTarget() {
    return {
        target,
        isWeb: target === 'web',
    }
}