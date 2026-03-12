const target: 'web' | 'local' = import.meta.env.VITE_TARGET || 'local'

export function useTarget() {
    console.debug('Current target:', target)
    return {
        target,
        isWeb: target === 'web',
    }
}